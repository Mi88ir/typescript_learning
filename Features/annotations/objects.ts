const profile = {
  name: "alex",
  age: 20,
  coords: {
    latitude: 0,
    longitude: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { latitude, longitude },
}: { coords: { latitude: number; longitude: number } } = profile;
