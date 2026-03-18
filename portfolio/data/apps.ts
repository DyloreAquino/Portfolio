import type { GalleryItem } from "react-image-gallery";

export const apps: Record<string, {
  title: string
  description: string
  github: string
  category: string
  link?: string
  images?: GalleryItem[]
}> = {
  'fitrepo': {
    title: 'FitRepo',
    description: 'A 5-man team project, using Expo and Supabase to create an app to track workouts and use AI to assist.',
    github: 'https://github.com/thisotherguyalso/FitRepo',
    category: 'mobileApp',
    images: [
      {
        original: "/FitRepo/fitrepo1.jpg"
      },
      {
        original: "/FitRepo/fitrepo2.jpg"
      },
      {
        original: "/FitRepo/fitrepo3.jpg"
      },
      {
        original: "/FitRepo/fitrepo4.jpg"
      },
    ]
  },
  'stockly': {
    title: 'Stockly',
    description: 'An app to help keep track of stocks. Automatically depletes stock and increases stock based on orders and deliveries.',
    github: 'https://github.com/DyloreAquino/Stockly',
    category: 'mobileApp',
    images: [
      {
        original: "/Stockly/stockly1.jpg"
      },
      {
        original: "/Stockly/stockly2.jpg"
      },
      {
        original: "/Stockly/stockly3.jpg"
      },
      {
        original: "/Stockly/stockly4.jpg"
      },
    ]
  },
  'central-bookings': {
    title: 'Central Bookings',
    description: 'A website written in Python with the Django framework which implements the function to book activities.',
    github: 'https://github.com/DyloreAquino/CSCI41Final-AkashicRecords',
    category: 'website',
    images: [
      {
        original: "/CentralBookings/centralbookings1.png"
      },
      {
        original: "/CentralBookings/centralbookings2.png"
      },
      {
        original: "/CentralBookings/centralbookings3.png"
      },
      {
        original: "/CentralBookings/centralbookings4.png"
      },
      {
        original: "/CentralBookings/centralbookings5.png"
      },
    ]
  },
}