import { Injectable } from '@nestjs/common';
import { AgenciesRepository } from '@gitroom/nestjs-libraries/database/prisma/agencies/agencies.repository';
import { User } from '@prisma/client';
import { CreateAgencyDto } from '@gitroom/nestjs-libraries/dtos/agencies/create.agency.dto';
import { NotificationService } from '@gitroom/nestjs-libraries/database/prisma/notifications/notification.service';

@Injectable()
export class AgenciesService {
  constructor(
    private _agenciesRepository: AgenciesRepository,
    private _notificationService: NotificationService
  ) {}
  getAgencyByUser(user: User) {
    return this._agenciesRepository.getAgencyByUser(user);
  }

  getCount() {
    return this._agenciesRepository.getCount();
  }

  getAllAgencies() {
    return this._agenciesRepository.getAllAgencies();
  }

  getAllAgenciesSlug() {
    return this._agenciesRepository.getAllAgenciesSlug();
  }

  getAgencyInformation(agency: string) {
    return this._agenciesRepository.getAgencyInformation(agency);
  }

  async approveOrDecline(email: string, action: string, id: string) {
    await this._agenciesRepository.approveOrDecline(action, id);
    const agency = await this._agenciesRepository.getAgencyById(id);

    if (action === 'approve') {
      await this._notificationService.sendEmail(
        agency?.user?.email!,
        'Your Agency has been approved and added to Postiz 🚀',
        `
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Agency has been approved and added to Postiz 🚀</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
  Hi there, <br /><br />
  Your agency ${agency?.name} has been added to Postiz!<br />
  You can <a href="https://vinsmokemedia.online/agencies/${agency?.slug}">check it here</a><br />
  It will appear on the main agency of Postiz in the next 24 hours.<br /><br />
</body>
</html>`
      );

      return;
    }

    await this._notificationService.sendEmail(
      agency?.user?.email!,
      'Your Agency has been declined 😔',
      `
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Agency has been declined</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
  Hi there, <br /><br />
  Your agency ${agency?.name} has been declined to Postiz!<br />
  If you think we have made a mistake, please reply to this email and let us know
</body>
</html>`
    );

    return;
  }

  async createAgency(user: User, body: CreateAgencyDto) {
    const agency = await this._agenciesRepository.createAgency(user, body);

    return agency;
  }
}
