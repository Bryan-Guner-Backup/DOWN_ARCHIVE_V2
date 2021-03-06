// Complete
const TABLE_NAME = 'conservationists';
exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME)
    .del()
    .then(() =>

      knex(TABLE_NAME).insert([
        {
          // newid: 1
          // id: 23,
          user_id: 44,
          name: 'Desert Spider Society',
          link_url: 'https://spiders.com',
          link_text: null,
          call_to_action: 'https://donate.org',
          about_us:
            'We support 15+ researchers at any given time and work hard to share the beauty and fascination of Mojave Desert dwelling spiders. Join our next restoration event this winter!',
          issues: null,
          support_us: null,
          city: null,
          country: 'United States',
          point_of_contact_name: 'Admin',
          point_of_contact_email: null,
          longitude: -115.548963786646,
          latitude: 35.1456319,
        },
        {
          // newid: 2
          // id: 28,
          user_id: 57,
          name: 'Bat Action Network',
          link_url: 'https://bats.org',
          link_text: null,
          call_to_action: '',
          about_us:
            'Bats are critically important to maintaining healthy ecosystems, so Bat Action Network is working in support of policies and management that address major threats.',
          issues: null,
          support_us: null,
          city: null,
          country: 'UK',
          point_of_contact_name: '1',
          point_of_contact_email: null,
          longitude: -0.341452351129091,
          latitude: 51.2715316,
        },
        {
          // newid: 3
          // id: 5,
          user_id: 11,
          name: 'Save the Sloths',
          link_url: 'https://www.google.com',
          link_text: null,
          call_to_action: 'https://www.google.com',
          about_us: 'Save the sloths.',
          issues: null,
          support_us: null,
          city: null,
          country: 'United States',
          point_of_contact_name: 'Sally the Sloth',
          point_of_contact_email: null,
          longitude: -74.0060152,
          latitude: 40.7127281,
        },
        {
          // newid: 4
          // id: 24,
          user_id: 45,
          name: 'Global Tiger Force',
          link_url: 'https://keyconservation.org',
          link_text: null,
          call_to_action: 'https://donate.org',
          about_us:
            'We are a collaboration of tiger researchers and organizations who are working to protect and preserve tiger populations globally.',
          issues: null,
          support_us: null,
          city: null,
          country: 'India',
          point_of_contact_name: 'Admin',
          point_of_contact_email: null,
          longitude: 72.8353355,
          latitude: 18.9387711,
        },
        {
          // newid: 5
          // id: 22,
          user_id: 58,
          name: 'Everglades Wildlife Foundations',
          link_url: 'https://keyconservation.org',
          link_text: null,
          call_to_action: 'https://donte.org',
          about_us:
            'The Everglade Wildlife Foundation has been working to protect and restore wildlife within Everglades National Park and surrounding areas for the past 20 years. Join our mission in person or remotely!',
          issues: null,
          support_us: null,
          city: null,
          country: 'United States',
          point_of_contact_name: 'Admin',
          point_of_contact_email: null,
          longitude: -80.9252637,
          latitude: 25.1418871,
        },
        {
          // newid: 6
          // id: 3,
          user_id: 3,
          name: 'Organization',
          link_url: 'https://www.google.com',
          link_text: null,
          call_to_action: 'https://www.google.com',
          about_us: 'Save the fishies',
          issues: null,
          support_us: null,
          city: null,
          country: 'USA',
          point_of_contact_name: 'Bri',
          point_of_contact_email: null,
          longitude: -80.1936589,
          latitude: 25.7742658,
        },
        {
          // newid: 7
          // id: 25,
          user_id: 47,
          name: 'Outback Conservancy',
          link_url: 'https://keyconservation.org',
          link_text: null,
          call_to_action: 'https://donate.org',
          about_us:
            'We protect and restore the habitats and species of the Australian Outback. ',
          issues: null,
          support_us: null,
          city: null,
          country: 'Austraila',
          point_of_contact_name: 'Admin',
          point_of_contact_email: null,
          longitude: 133.8812885,
          latitude: -23.6983884,
        },
        {
          // newid: 8
          // id: 6,
          user_id: 1,
          name: 'Save The Bears',
          link_url: 'https://bears.com',
          link_text: 'Bears.com',
          call_to_action: 'https://donate.com',
          about_us: '1',
          issues: null,
          support_us: null,
          city: null,
          country: '1',
          point_of_contact_name: '32',
          point_of_contact_email: null,
          longitude: -84.3901849,
          latitude: 33.7490987,
        },
        {
          // newid: 9
          // id: 21,
          user_id: 54,
          name: 'Western Raptor Center',
          link_url: 'https://keyconservation.org',
          link_text: null,
          call_to_action: 'https://donate.org',
          about_us:
            'We work to protect and rehabilitate raptors within the Greater Yellowstone Ecosystem. Our facility is located within Jackson Hole, Wyoming but we help raptors from Idaho and Montana as well.',
          issues: null,
          support_us: null,
          city: null,
          country: 'United States',
          point_of_contact_name: '1',
          point_of_contact_email: null,
          longitude: -110.761815,
          latitude: 43.479965,
        },
        {
          // newid: 10
          // id: 26,
          user_id: 55,
          name: 'Coral Alliance',
          link_url: 'https://donate.org',
          link_text: null,
          call_to_action: '',
          about_us:
            "Our organization is located within the beautiful Coral Triangle at the intersection of the Indian and Pacific Ocean. We work to protect one of the world's most biodiverse places.",
          issues: null,
          support_us: null,
          city: null,
          country: 'Indonesia',
          point_of_contact_name: 'Admin',
          point_of_contact_email: null,
          longitude: 131.2512311,
          latitude: -0.8687303,
        },
        {
          // newid: 11
          // id: 9,
          user_id: 9,
          name: 'Bri???s second org',
          link_url: 'https://google.com',
          link_text: null,
          call_to_action: 'https://google.com',
          about_us: 'We like fish',
          issues: null,
          support_us: null,
          city: null,
          country: 'USA',
          point_of_contact_name: 'Bri',
          point_of_contact_email: null,
          longitude: 33.2056297,
          latitude: 0.4215778,
        },
        {
          // newid: 12
          // id: 27,
          user_id: 56,
          name: 'Urban Forest Working Group',
          link_url: 'https://donate.org',
          link_text: null,
          call_to_action: '',
          about_us:
            'Our mission is to significantly increase the number and impact of urban trees in Santiago. We work with local community groups to plant and care for trees in the region.',
          issues: null,
          support_us: null,
          city: null,
          country: 'Chile',
          point_of_contact_name: 'Admin',
          point_of_contact_email: null,
          longitude: -70.6504451,
          latitude: -33.4377968,
        },
        {
          // newid: 13
          // id: 4,
          user_id: 76,
          name: 'Sylvester Foundation',
          link_url: 'https://wings',
          link_text: null,
          call_to_action: '',
          about_us: 'No',
          issues: null,
          support_us: null,
          city: null,
          country: 'Navy???s',
          point_of_contact_name: 'Manga',
          point_of_contact_email: null,
          longitude: -118.7559974,
          latitude: 36.7014631,
        },
        {
          // newid: 14
          // id: 7,
          user_id: 18,
          name: 'Save the Sloths ',
          link_url: 'https://google.com',
          link_text: null,
          call_to_action: 'https://www.google.com',
          about_us: 'Save the sloths. ',
          issues: null,
          support_us: null,
          city: null,
          country: 'Australia ',
          point_of_contact_name: 'Sally the sloth',
          point_of_contact_email: null,
          longitude: 134.755,
          latitude: -24.7761086,
        },
        {
          // newid: 15
          // id: 8,
          user_id: 39,
          name: 'Doggo Domination',
          link_url: 'https://doggo.com',
          link_text: 'Doggo.com',
          call_to_action: 'https://donate.com',
          about_us:
            'The Doggo Domination Project is based in Atlanta, GA but we work all over the south. We have been working to conserve doggos that visit our backyard for a long time.',
          issues: null,
          support_us: null,
          city: null,
          country: '1',
          point_of_contact_name: '1',
          point_of_contact_email: null,
          longitude: -84.3901849,
          latitude: 33.7490987,
        },
        {
          // newid: 16
          // id: 20,
          user_id: 41,
          name: 'Save the somethings whatever',
          link_url: 'https://ucsd.edu/',
          link_text: null,
          call_to_action: '',
          about_us: '',
          issues: null,
          support_us: null,
          city: null,
          country: 'USA',
          point_of_contact_name: 'Me',
          point_of_contact_email: null,
          longitude: -84.3901849,
          latitude: 33.7490987,
        },

      ])
    );
};
