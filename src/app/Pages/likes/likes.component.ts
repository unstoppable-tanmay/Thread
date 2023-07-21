import { Component } from '@angular/core';

import {
  IconDefinition,
  faMagnifyingGlass,
  faCertificate,
  faCheck,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent {

  faMagnifyingGlass: IconDefinition = faMagnifyingGlass
  faCertificate: IconDefinition = faCertificate
  faCheck: IconDefinition = faCheck
  faXmark: IconDefinition = faXmark
  Search = [
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg",
      "username": "Kristie",
      "name": "Webb",
      "following": true,
      "followers": 2519,
      "verified": true
    },
    {
      "image": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "username": "Ester",
      "name": "Brock",
      "following": true,
      "followers": 796,
      "verified": true
    },
    {
      "image": "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82&w=600c=1050%2C550&w=1050",
      "username": "Julie",
      "name": "Ellison",
      "following": true,
      "followers": 1404,
      "verified": false
    },
    {
      "image": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "username": "Kara",
      "name": "Little",
      "following": false,
      "followers": 1229,
      "verified": true
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg",
      "username": "Ellis",
      "name": "Cotton",
      "following": true,
      "followers": 471,
      "verified": false
    },
    {
      "image": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luis-dalvan-1770809.jpg&fm=jpg",
      "username": "Blanchard",
      "name": "Reed",
      "following": false,
      "followers": 695,
      "verified": false
    },
    {
      "image": "https://img.freepik.com/premium-photo/mountain-range-is-shown-with-lake-mountains-background_421632-878.jpg",
      "username": "Ursula",
      "name": "Nielsen",
      "following": true,
      "followers": 2146,
      "verified": true
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg",
      "username": "Moon",
      "name": "Blankenship",
      "following": false,
      "followers": 1788,
      "verified": true
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg",
      "username": "Parker",
      "name": "Bush",
      "following": true,
      "followers": 593,
      "verified": false
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg",
      "username": "Walls",
      "name": "Perry",
      "following": true,
      "followers": 1525,
      "verified": true
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg",
      "username": "Madelyn",
      "name": "Riley",
      "following": true,
      "followers": 2622,
      "verified": true
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg",
      "username": "Kerr",
      "name": "Cantrell",
      "following": true,
      "followers": 1395,
      "verified": false
    },
    {
      "image": "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      "username": "Gwendolyn",
      "name": "Gill",
      "following": true,
      "followers": 2041,
      "verified": false
    },
    {
      "image": "https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg",
      "username": "Alisa",
      "name": "Manning",
      "following": true,
      "followers": 1506,
      "verified": false
    },
    {
      "image": "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      "username": "Amelia",
      "name": "Ramos",
      "following": false,
      "followers": 2994,
      "verified": false
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg",
      "username": "Nikki",
      "name": "Roach",
      "following": true,
      "followers": 2188,
      "verified": true
    },
    {
      "image": "https://t3.ftcdn.net/jpg/05/48/56/38/360_F_548563894_s5tGFJjPhc7lp5uG4iJkR77QbgvrKr9e.jpg",
      "username": "Myers",
      "name": "Hardy",
      "following": true,
      "followers": 1434,
      "verified": false
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg",
      "username": "Cantrell",
      "name": "Austin",
      "following": false,
      "followers": 792,
      "verified": true
    },
    {
      "image": "https://t3.ftcdn.net/jpg/05/48/56/38/360_F_548563894_s5tGFJjPhc7lp5uG4iJkR77QbgvrKr9e.jpg",
      "username": "Minerva",
      "name": "Nixon",
      "following": true,
      "followers": 925,
      "verified": false
    },
    {
      "image": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luis-dalvan-1770809.jpg&fm=jpg",
      "username": "Johanna",
      "name": "Rush",
      "following": false,
      "followers": 234,
      "verified": true
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg",
      "username": "Jeannine",
      "name": "Norris",
      "following": false,
      "followers": 782,
      "verified": false
    },
    {
      "image": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "username": "Ball",
      "name": "Hill",
      "following": false,
      "followers": 2371,
      "verified": false
    },
    {
      "image": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luis-dalvan-1770809.jpg&fm=jpg",
      "username": "Hewitt",
      "name": "Kirk",
      "following": true,
      "followers": 1336,
      "verified": true
    },
    {
      "image": "https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg",
      "username": "Lavonne",
      "name": "Wiley",
      "following": false,
      "followers": 1688,
      "verified": true
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg",
      "username": "Lily",
      "name": "Stevens",
      "following": true,
      "followers": 545,
      "verified": false
    },
    {
      "image": "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      "username": "Schwartz",
      "name": "Slater",
      "following": false,
      "followers": 2093,
      "verified": false
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg",
      "username": "Mindy",
      "name": "Hall",
      "following": false,
      "followers": 993,
      "verified": false
    },
    {
      "image": "https://img.freepik.com/premium-photo/mountain-range-is-shown-with-lake-mountains-background_421632-878.jpg",
      "username": "Galloway",
      "name": "Glass",
      "following": false,
      "followers": 1836,
      "verified": false
    },
    {
      "image": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luis-dalvan-1770809.jpg&fm=jpg",
      "username": "Maritza",
      "name": "Boyle",
      "following": true,
      "followers": 1803,
      "verified": false
    },
    {
      "image": "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luis-dalvan-1770809.jpg&fm=jpg",
      "username": "Marian",
      "name": "Reyes",
      "following": true,
      "followers": 1377,
      "verified": true
    },
    {
      "image": "https://img.freepik.com/premium-photo/mountain-range-is-shown-with-lake-mountains-background_421632-878.jpg",
      "username": "Shannon",
      "name": "Dalton",
      "following": true,
      "followers": 1468,
      "verified": false
    },
    {
      "image": "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      "username": "Frazier",
      "name": "Horton",
      "following": true,
      "followers": 544,
      "verified": false
    }
  ]
}
