export class Profile {
  name: string;
  birthDay;
  weight: number;
  height: number;
  gender: string;
  age: number;
  activityLevel: string;
  diseases: Array<string>;

  constructor(
    name,
    birthDay,
    weight,
    height,
    gender,
    age,
    activityLevel,
    diseases
  ) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
    this.age = age;
    this.activityLevel = activityLevel;
    diseases.forEach((element) => {
      this.diseases.push(element);
    });
    this.birthDay = {
      date: birthDay.getDate(),
      month: 'm' + birthDay.getMonth(),
      year: birthDay.getFullYear(),
    };
  }
}
