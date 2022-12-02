import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular/providers/modal-controller';
import { AddProfileModalComponent } from '../modals/add-profile-modal/add-profile-modal.component';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  Profiles;
  constructor(private modalCtrl: ModalController) {
    this.Profiles = new Array<Profile>();
    this.Profiles = [
      {
        name: 'Umut Yılmaz',
        age: '22',
        birthDay: new Date(2000, 6, 31),
        weight: 12,
        height: 184,
        gender: 'Erkek',
        diseases: ['Hastalık Tip 1', 'Hastalık Tip 2'],
        activityLevel: 'Hard',
      },
      {
        name: 'Burak Saygılı',
        age: '22',
        birthDay: new Date(2000, 7, 14),
        weight: 15,
        height: 180,
        gender: 'Erkek',
        diseases: ['Hastalık Tip 5', 'Hastalık Tip 6'],
        activityLevel: 'Medium',
      },
      {
        name: 'Cihad Nursaçan',
        age: '22',
        birthDay: new Date(2000, 8, 20),
        weight: 14,
        height: 183,
        gender: 'Erkek',
        diseases: ['Hastalık Tip 3', 'Hastalık Tip 4'],
        activityLevel: 'Hard',
      },
      {
        name: 'Burcum Gürol',
        age: '22',
        birthDay: new Date(2000, 3, 3),
        weight: 3,
        height: 150,
        gender: 'Female',
        diseases: ['Hastalık Tip 0', 'Hastalık Tip 7'],
        activityLevel: 'Light',
      },
    ];
  }

  addProfile() {
    this.openModal();
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddProfileModalComponent,
    });
    await modal.present();
  }
}
