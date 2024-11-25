interface Caregiver {
  id: number;
  fullName: string;
  rating: number;
  totalReviews: number;
  cost: number;
  profileImage: string;
}

interface SeedData {
  caregivers: Caregiver[],
}

export const initialData: SeedData = {
  caregivers: [
    {
      id: 0,
      fullName: "Joseph W",
      rating: 4.9,
      totalReviews: 252,
      cost: 74,
      profileImage: 'profile-1.webp'
    },
    {
      id: 1,
      fullName: "Carl J",
      rating: 4.0,
      totalReviews: 252,
      cost: 53,
      profileImage: 'profile-2.jpg'
    },
    {
      id: 2,
      fullName: "Jimmy N",
      rating: 3.1,
      totalReviews: 252,
      cost: 25,
      profileImage: 'profile-2.jpg'
    },
    {
      id: 3,
      fullName: "Rick J",
      rating: 5.0,
      totalReviews: 252,
      cost: 100,
      profileImage: 'profile-1.webp'
    },
    {
      id: 4,
      fullName: "Ramon M",
      rating: 4.9,
      totalReviews: 252,
      cost: 75,
      profileImage: 'profile-2.jpg'
    },
    {
      id: 5,
      fullName: "Luis R",
      rating: 4.9,
      totalReviews: 252,
      cost: 75,
      profileImage: 'profile-1.webp'
    },
  ]
}