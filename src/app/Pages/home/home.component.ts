import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  Feeds = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg',
      name: 'Melva Padilla',
      data: 'Fugiat exercitation laboris occaecat reprehenderit nostrud cillum dolor id nulla mollit qui.',
      text: false,
      like: 3,
      replies: 15,
      time: 5,
    },
    {
      image:
        'https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82&w=600c=1050%2C550&w=1050',
      name: 'Martin Frazier',
      data: 'Amet sunt est et occaecat ipsum.',
      text: false,
      like: 14,
      replies: 16,
      time: 9,
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg',
      name: 'Rita Bailey',
      data: 'Do velit magna proident duis mollit sint.',
      text: false,
      like: 1,
      replies: 0,
      time: 2,
    },
    {
      image:
        'https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=',
      name: 'Serena Robertson',
      data: 'Occaecat nostrud ex sint adipisicing adipisicing eu dolor adipisicing occaecat minim reprehenderit ullamco sint.',
      text: false,
      like: 9,
      replies: 7,
      time: 5,
    },
    {
      image:
        'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Leon Mcintosh',
      data: 'Commodo esse duis labore esse commodo cillum laborum duis incididunt cupidatat deserunt in.',
      text: false,
      like: 12,
      replies: 16,
      time: 11,
    },
    {
      image:
        'https://t3.ftcdn.net/jpg/05/48/56/38/360_F_548563894_s5tGFJjPhc7lp5uG4iJkR77QbgvrKr9e.jpg',
      name: 'Elliott Nunez',
      data: 'Et velit in in nostrud non.',
      text: false,
      like: 8,
      replies: 18,
      time: 0,
    },
    {
      image:
        'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'David Marks',
      data: 'Consectetur eu culpa eu ut officia incididunt quis non elit.',
      text: false,
      like: 27,
      replies: 9,
      time: 2,
    },
    {
      image:
        'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Leta Russo',
      data: 'Et fugiat officia cupidatat labore aliquip incididunt ullamco sint id amet.',
      text: false,
      like: 16,
      replies: 18,
      time: 4,
    },
    {
      image:
        'https://t3.ftcdn.net/jpg/05/48/56/38/360_F_548563894_s5tGFJjPhc7lp5uG4iJkR77QbgvrKr9e.jpg',
      name: 'Darcy Cote',
      data: 'Magna duis sit eu ad culpa sunt duis commodo adipisicing pariatur adipisicing veniam.',
      text: false,
      like: 25,
      replies: 12,
      time: 5,
    },
    {
      image:
        'https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=',
      name: 'Ella Branch',
      data: 'Et commodo occaecat adipisicing sit exercitation ut aliquip.',
      text: false,
      like: 30,
      replies: 3,
      time: 10,
    },
    {
      image:
        'https://t3.ftcdn.net/jpg/05/48/56/38/360_F_548563894_s5tGFJjPhc7lp5uG4iJkR77QbgvrKr9e.jpg',
      name: 'Sloan Reed',
      data: 'Fugiat anim voluptate ad sint qui.',
      text: false,
      like: 18,
      replies: 11,
      time: 8,
    },
    {
      image:
        'https://img.freepik.com/premium-photo/mountain-range-is-shown-with-lake-mountains-background_421632-878.jpg',
      name: 'Maureen Dale',
      data: 'Id sint nisi ea ipsum in sint fugiat ullamco nisi proident eu id nisi exercitation.',
      text: false,
      like: 18,
      replies: 4,
      time: 3,
    },
    {
      image:
        'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Darlene Doyle',
      data: 'Voluptate mollit enim sit culpa aliquip cillum non sit in nisi.',
      text: false,
      like: 21,
      replies: 3,
      time: 8,
    },
    {
      image:
        'https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=',
      name: 'Lopez Pearson',
      data: 'Sunt cupidatat est eiusmod anim cillum et anim reprehenderit incididunt est pariatur ullamco.',
      text: false,
      like: 23,
      replies: 16,
      time: 5,
    },
    {
      image:
        'https://static.theprint.in/wp-content/uploads/2022/07/Untitled-design-10-1.jpg',
      name: 'Kayla Strickland',
      data: 'Exercitation Lorem cillum proident ipsum.',
      text: false,
      like: 24,
      replies: 19,
      time: 11,
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/640px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg',
      name: 'Emily Fry',
      data: 'Laboris occaecat quis do dolore occaecat est nulla esse commodo mollit reprehenderit consequat sunt amet.',
      text: false,
      like: 14,
      replies: 14,
      time: 9,
    },
    {
      image:
        'https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=',
      name: 'Nixon Estrada',
      data: 'Consectetur voluptate in excepteur quis.',
      text: false,
      like: 18,
      replies: 3,
      time: 11,
    },
  ];
}
