// STORIES (25)
export const Stories = [
  {
    _id: 's101',
    txt: 'Sunrise in the desert. The air was crisp and we hiked for hours.',
    imgUrl: 'https://picsum.photos/470/300?random=101',
    createdAt: 1700100000001,
    by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' },
    comments: [
      { id: 'c10101', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Looks incredible!' },
      { id: 'c10102', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Miss the desert!' },
      { id: 'c10103', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Such a vibe.' },
      { id: 'c10104', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'The best mornings.' },
      { id: 'c10105', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Was it cold?' },
      { id: 'c10106', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Perfect lighting!' },
      { id: 'c10107', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Love this.' },
      { id: 'c10108', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'How early was this?' },
      { id: 'c10109', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'We have to do this again.' },
      { id: 'c10110', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Thank you all!' }
    ],
    likes: ['u102', 'u103', 'u104', 'u105', 'u106', 'u107', 'u108', 'u109', 'u110', 'u111']
  },
  // 2
  {
    _id: 's102',
    txt: 'City lights never sleep. This was the view from the rooftop at 2am.',
    imgUrl: 'https://picsum.photos/470/300?random=102',
    createdAt: 1700100000102,
    by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' },
    comments: [
      { id: 'c10201', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Crazy view!' },
      { id: 'c10202', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'City never disappoints.' },
      { id: 'c10203', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'I want to go up there!' },
      { id: 'c10204', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Insane lights.' },
      { id: 'c10205', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Next time, call me!' },
      { id: 'c10206', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Love the colors.' },
      { id: 'c10207', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Skyline goals.' },
      { id: 'c10208', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Epic!' },
      { id: 'c10209', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Can we sleep there?' },
      { id: 'c10210', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Let’s plan another!' }
    ],
    likes: ['u101', 'u103', 'u104', 'u105', 'u106', 'u107', 'u108', 'u109', 'u110', 'u112']
  },
  // 3
  {
    _id: 's103',
    txt: 'Best coffee spot in town – secret garden vibes.',
    imgUrl: 'https://picsum.photos/470/300?random=103',
    createdAt: 1700100000203,
    by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' },
    comments: [
      { id: 'c10301', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Where is this?' },
      { id: 'c10302', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Looks cozy.' },
      { id: 'c10303', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Need to visit.' },
      { id: 'c10304', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'The vibe is perfect.' },
      { id: 'c10305', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'I want their coffee.' },
      { id: 'c10306', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Hidden gems!' },
      { id: 'c10307', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Next meeting spot?' },
      { id: 'c10308', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Save me a seat.' },
      { id: 'c10309', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Will come with friends.' },
      { id: 'c10310', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Coffee is on me next time.' }
    ],
    likes: ['u101', 'u102', 'u104', 'u105', 'u106', 'u107', 'u108', 'u109', 'u110', 'u113']
  },
  // 4
  {
    _id: 's104',
    txt: 'A rainy afternoon in Tel Aviv, all the streets are alive!',
    imgUrl: 'https://picsum.photos/470/300?random=104',
    createdAt: 1700100000304,
    by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' },
    comments: [
      { id: 'c10401', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Love rainy days!' },
      { id: 'c10402', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Perfect for coffee.' },
      { id: 'c10403', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'That reflection!' },
      { id: 'c10404', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'City is magical.' },
      { id: 'c10405', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Did you get wet?' },
      { id: 'c10406', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Great capture.' },
      { id: 'c10407', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Looks so lively.' },
      { id: 'c10408', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'So much energy.' },
      { id: 'c10409', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Rainy days = best days.' },
      { id: 'c10410', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Can’t wait for winter!' }
    ],
    likes: ['u101', 'u102', 'u103', 'u105', 'u106', 'u107', 'u108', 'u109', 'u110', 'u112']
  },
  // 5
  {
    _id: 's105',
    txt: 'Evening ride along the beach. Nothing beats the sunset view.',
    imgUrl: 'https://picsum.photos/470/300?random=105',
    createdAt: 1700100000405,
    by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' },
    comments: [
      { id: 'c10501', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'I need my bike again!' },
      { id: 'c10502', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'This looks freeing.' },
      { id: 'c10503', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Sunsets are the best.' },
      { id: 'c10504', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Beach vibes.' },
      { id: 'c10505', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Where is this?' },
      { id: 'c10506', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Amazing shot!' },
      { id: 'c10507', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Need this ride.' },
      { id: 'c10508', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'How far did you go?' },
      { id: 'c10509', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Incredible!' },
      { id: 'c10510', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Sunsets for the win.' }
    ],
    likes: ['u101', 'u102', 'u103', 'u104', 'u106', 'u107', 'u108', 'u109', 'u110', 'u113']
  },
  // 6
  {
    _id: 's106',
    txt: 'Camping trip: bonfire, friends, and endless stars.',
    imgUrl: 'https://picsum.photos/470/300?random=106',
    createdAt: 1700100000506,
    by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' },
    comments: [
      { id: 'c10601', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Did you see the Milky Way?' },
      { id: 'c10602', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Bonfires are life.' },
      { id: 'c10603', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Night sky goals.' },
      { id: 'c10604', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Sounds fun!' },
      { id: 'c10605', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Take me next time!' },
      { id: 'c10606', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'So many stars!' },
      { id: 'c10607', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'The best memories.' },
      { id: 'c10608', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Looks cozy.' },
      { id: 'c10609', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Campfire stories?' },
      { id: 'c10610', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Best trip ever.' }
    ],
    likes: ['u101', 'u102', 'u103', 'u104', 'u105', 'u107', 'u108', 'u109', 'u110', 'u115']
  },
  // 7
  {
    _id: 's107',
    txt: 'Sunflower fields forever. What a golden hour.',
    imgUrl: 'https://picsum.photos/470/300?random=107',
    createdAt: 1700100000607,
    by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' },
    comments: [
      { id: 'c10701', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Wow, all yellow!' },
      { id: 'c10702', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'My favorite flower.' },
      { id: 'c10703', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Where is this field?' },
      { id: 'c10704', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Pure happiness.' },
      { id: 'c10705', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Sunshine day.' },
      { id: 'c10706', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Golden hour master.' },
      { id: 'c10707', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Love this moment.' },
      { id: 'c10708', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Bring me next time!' },
      { id: 'c10709', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Epic shot.' },
      { id: 'c10710', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Sunflowers forever.' }
    ],
    likes: ['u101', 'u102', 'u103', 'u104', 'u106', 'u108', 'u109', 'u110', 'u113', 'u114']
  },
  // 8
  {
    _id: 's108',
    txt: 'Waves, salt, and wind – nothing like a winter surf session.',
    imgUrl: 'https://picsum.photos/470/300?random=108',
    createdAt: 1700100000708,
    by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' },
    comments: [
      { id: 'c10801', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Cold but awesome!' },
      { id: 'c10802', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'How was the water?' },
      { id: 'c10803', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Brave one!' },
      { id: 'c10804', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Those waves wow!' },
      { id: 'c10805', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Best sport ever.' },
      { id: 'c10806', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Want to try it!' },
      { id: 'c10807', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Perfect shot.' },
      { id: 'c10808', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Too cold for me.' },
      { id: 'c10809', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'I’m jealous!' },
      { id: 'c10810', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Worth it every time.' }
    ],
    likes: ['u101', 'u102', 'u103', 'u104', 'u105', 'u106', 'u107', 'u109', 'u110', 'u115']
  },
  // 9
  {
    _id: 's109',
    txt: 'Picnic at the park. Sun, grass, food, and laughter!',
    imgUrl: 'https://picsum.photos/470/300?random=109',
    createdAt: 1700100000909,
    by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' },
    comments: [
      { id: 'c10901', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Picnics rule!' },
      { id: 'c10902', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Yum, what did you eat?' },
      { id: 'c10903', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'So fun!' },
      { id: 'c10904', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Invite me next time.' },
      { id: 'c10905', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Park days > beach days.' },
      { id: 'c10906', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Who made the salad?' },
      { id: 'c10907', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Love this.' },
      { id: 'c10908', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'So green.' },
      { id: 'c10909', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Family time!' },
      { id: 'c10910', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Everyone’s invited next time.' }
    ],
    likes: ['u101', 'u102', 'u103', 'u104', 'u106', 'u107', 'u108', 'u110', 'u113', 'u115']
  },
  // 10
  {
    _id: 's110',
    txt: 'Sunset hike in the Carmel. Amazing views.',
    imgUrl: 'https://picsum.photos/470/300?random=110',
    createdAt: 1700100001010,
    by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' },
    comments: [
      { id: 'c11001', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'You always catch the best views!' },
      { id: 'c11002', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Nature at its best.' },
      { id: 'c11003', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Want to join next time.' },
      { id: 'c11004', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Beautiful!' },
      { id: 'c11005', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'I love hiking.' },
      { id: 'c11006', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'The Carmel is amazing.' },
      { id: 'c11007', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Sunset colors.' },
      { id: 'c11008', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Nice trail.' },
      { id: 'c11009', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'How long was the hike?' },
      { id: 'c11010', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Best day ever.' }
    ],
    likes: ['u101', 'u102', 'u104', 'u106', 'u108', 'u109', 'u110', 'u112', 'u114', 'u115']
  },
  // 11
  {
    _id: 's111',
    txt: 'Early morning gym session. The city is still asleep.',
    imgUrl: 'https://picsum.photos/470/300?random=111',
    createdAt: 1700100001111,
    by: { _id: 'u111', username: 'bar.k', fullname: 'Bar Kedem', imgUrl: 'https://randomuser.me/api/portraits/men/41.jpg' },
    comments: [
      { id: 'c11101', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Respect!' },
      { id: 'c11102', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Motivation 100%.' },
      { id: 'c11103', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'When do you sleep?' },
      { id: 'c11104', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'You are inspiring.' },
      { id: 'c11105', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Nice work!' },
      { id: 'c11106', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Next time I’ll join.' },
      { id: 'c11107', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Good morning.' },
      { id: 'c11108', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Great start.' },
      { id: 'c11109', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Super early.' },
      { id: 'c11110', by: { _id: 'u111', username: 'bar.k', fullname: 'Bar Kedem', imgUrl: 'https://randomuser.me/api/portraits/men/41.jpg' }, txt: 'Feeling strong!' }
    ],
    likes: ['u101', 'u102', 'u103', 'u105', 'u106', 'u107', 'u108', 'u109', 'u110', 'u113']
  },
  // 12
  {
    _id: 's112',
    txt: 'Yoga on the rooftop as the sun rises. Perfect start.',
    imgUrl: 'https://picsum.photos/470/300?random=112',
    createdAt: 1700100001212,
    by: { _id: 'u112', username: 'shira_lev', fullname: 'Shira Levi', imgUrl: 'https://randomuser.me/api/portraits/women/42.jpg' },
    comments: [
      { id: 'c11201', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Chill mode!' },
      { id: 'c11202', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'I want to join!' },
      { id: 'c11203', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Sunrise and yoga.' },
      { id: 'c11204', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'You are so zen.' },
      { id: 'c11205', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Vibes!' },
      { id: 'c11206', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'This is cool.' },
      { id: 'c11207', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Good stretch.' },
      { id: 'c11208', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Peaceful morning.' },
      { id: 'c11209', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Next time wake me.' },
      { id: 'c11210', by: { _id: 'u112', username: 'shira_lev', fullname: 'Shira Levi', imgUrl: 'https://randomuser.me/api/portraits/women/42.jpg' }, txt: 'Best way to start.' }
    ],
    likes: ['u101', 'u102', 'u103', 'u104', 'u105', 'u106', 'u107', 'u108', 'u110', 'u115']
  },
  // 13
  {
    _id: 's113',
    txt: 'Coding at night: silence, focus, and lots of coffee.',
    imgUrl: 'https://picsum.photos/470/300?random=113',
    createdAt: 1700100001313,
    by: { _id: 'u113', username: 'nir_sh', fullname: 'Nir Shachar', imgUrl: 'https://randomuser.me/api/portraits/men/43.jpg' },
    comments: [
      { id: 'c11301', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Night owl!' },
      { id: 'c11302', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Save some coffee for me.' },
      { id: 'c11303', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Late night coder.' },
      { id: 'c11304', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'I feel you.' },
      { id: 'c11305', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Pulling an all nighter?' },
      { id: 'c11306', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Focus mode.' },
      { id: 'c11307', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'I code at night too.' },
      { id: 'c11308', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Coffee club.' },
      { id: 'c11309', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Energy drinks?' },
      { id: 'c11310', by: { _id: 'u113', username: 'nir_sh', fullname: 'Nir Shachar', imgUrl: 'https://randomuser.me/api/portraits/men/43.jpg' }, txt: 'Best way to work.' }
    ],
    likes: ['u101', 'u102', 'u104', 'u105', 'u106', 'u107', 'u108', 'u109', 'u110', 'u113']
  },
  // 14
  {
    _id: 's114',
    txt: 'Street art walking tour in Florentin. Tel Aviv colors everywhere.',
    imgUrl: 'https://picsum.photos/470/300?random=114',
    createdAt: 1700100001414,
    by: { _id: 'u114', username: 'hilla_f', fullname: 'Hilla Freidman', imgUrl: 'https://randomuser.me/api/portraits/women/44.jpg' },
    comments: [
      { id: 'c11401', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Love that graffiti!' },
      { id: 'c11402', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Florentin is the best.' },
      { id: 'c11403', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Great shot!' },
      { id: 'c11404', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'The colors pop.' },
      { id: 'c11405', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'I want to come next time.' },
      { id: 'c11406', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'So vibrant!' },
      { id: 'c11407', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Nice details.' },
      { id: 'c11408', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Best neighborhood.' },
      { id: 'c11409', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Can we go soon?' },
      { id: 'c11410', by: { _id: 'u114', username: 'hilla_f', fullname: 'Hilla Freidman', imgUrl: 'https://randomuser.me/api/portraits/women/44.jpg' }, txt: 'Everyone’s invited!' }
    ],
    likes: ['u101', 'u102', 'u104', 'u105', 'u107', 'u108', 'u109', 'u110', 'u113', 'u114']
  },
  // 15
  {
    _id: 's115',
    txt: 'Birthday brunch at the port. Pancakes and good company!',
    imgUrl: 'https://picsum.photos/470/300?random=115',
    createdAt: 1700100001515,
    by: { _id: 'u115', username: 'ben_b', fullname: 'Ben Barak', imgUrl: 'https://randomuser.me/api/portraits/men/45.jpg' },
    comments: [
      { id: 'c11501', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Happy birthday!' },
      { id: 'c11502', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Pancakes look great.' },
      { id: 'c11503', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Enjoy!' },
      { id: 'c11504', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Who made the cake?' },
      { id: 'c11505', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Yum!' },
      { id: 'c11506', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Port mornings rock.' },
      { id: 'c11507', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Who brought the balloons?' },
      { id: 'c11508', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Best company.' },
      { id: 'c11509', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Birthday brunch ftw.' },
      { id: 'c11510', by: { _id: 'u115', username: 'ben_b', fullname: 'Ben Barak', imgUrl: 'https://randomuser.me/api/portraits/men/45.jpg' }, txt: 'Best birthday ever!' }
    ],
    likes: ['u101', 'u102', 'u103', 'u104', 'u106', 'u107', 'u109', 'u110', 'u112', 'u115']
  },
  // 16
  {
    _id: 's116',
    txt: 'First rain of the year – the smell, the sound, the mood.',
    imgUrl: 'https://picsum.photos/470/300?random=116',
    createdAt: 1700100001616,
    by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' },
    comments: [
      { id: 'c11601', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Petrichor lover.' },
      { id: 'c11602', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Smells amazing.' },
      { id: 'c11603', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Finally!' },
      { id: 'c11604', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Best weather.' },
      { id: 'c11605', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'First rain is magic.' },
      { id: 'c11606', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Umbrella time!' },
      { id: 'c11607', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Time for soup.' },
      { id: 'c11608', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Love the rain.' },
      { id: 'c11609', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Cozy day.' },
      { id: 'c11610', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Let it rain!' }
    ],
    likes: ['u102', 'u103', 'u104', 'u105', 'u106', 'u107', 'u108', 'u109', 'u110', 'u115']
  },
  // 17
  {
    _id: 's117',
    txt: 'Backyard BBQ – grilling, chilling, and good friends.',
    imgUrl: 'https://picsum.photos/470/300?random=117',
    createdAt: 1700100001717,
    by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' },
    comments: [
      { id: 'c11701', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Save me a burger!' },
      { id: 'c11702', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Great food!' },
      { id: 'c11703', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Veggie options?' },
      { id: 'c11704', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'BBQ season!' },
      { id: 'c11705', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'I’ll bring dessert.' },
      { id: 'c11706', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Sounds fun.' },
      { id: 'c11707', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'When is the next one?' },
      { id: 'c11708', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'BBQ master.' },
      { id: 'c11709', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'BBQ for life.' },
      { id: 'c11710', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'You’re all invited!' }
    ],
    likes: ['u101', 'u103', 'u104', 'u105', 'u106', 'u107', 'u108', 'u109', 'u110', 'u113']
  },
  // 18
  {
    _id: 's118',
    txt: 'Late night dessert run – ice cream fixes everything.',
    imgUrl: 'https://picsum.photos/470/300?random=118',
    createdAt: 1700100001818,
    by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' },
    comments: [
      { id: 'c11801', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Which flavor?' },
      { id: 'c11802', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'I want some!' },
      { id: 'c11803', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Sweet dreams.' },
      { id: 'c11804', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Best late snack.' },
      { id: 'c11805', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Ice cream time.' },
      { id: 'c11806', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Yum!' },
      { id: 'c11807', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Can’t beat that.' },
      { id: 'c11808', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Sweet tooth!' },
      { id: 'c11809', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Best run ever.' },
      { id: 'c11810', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Next time you join.' }
    ],
    likes: ['u101', 'u102', 'u104', 'u105', 'u106', 'u107', 'u108', 'u109', 'u110', 'u115']
  },
  // 19
  {
    _id: 's119',
    txt: 'Cycling around the city at dawn. Empty roads and cool breeze.',
    imgUrl: 'https://picsum.photos/470/300?random=119',
    createdAt: 1700100001919,
    by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' },
    comments: [
      { id: 'c11901', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'You’re fast!' },
      { id: 'c11902', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Which route?' },
      { id: 'c11903', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'No cars at all?' },
      { id: 'c11904', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Morning air is the best.' },
      { id: 'c11905', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'What time did you start?' },
      { id: 'c11906', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Next time I’ll join.' },
      { id: 'c11907', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Cycling club.' },
      { id: 'c11908', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Great way to start.' },
      { id: 'c11909', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Fresh air!' },
      { id: 'c11910', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Best rides are in the morning.' }
    ],
    likes: ['u101', 'u102', 'u103', 'u105', 'u106', 'u107', 'u108', 'u109', 'u110', 'u114']
  },
  // 20
  {
    _id: 's120',
    txt: 'New puppy at home! Meet our little fluffball 🐶',
    imgUrl: 'https://picsum.photos/470/300?random=120',
    createdAt: 1700100002020,
    by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' },
    comments: [
      { id: 'c12001', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'So cute!' },
      { id: 'c12002', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Name??' },
      { id: 'c12003', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Congrats!' },
      { id: 'c12004', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Need a playdate.' },
      { id: 'c12005', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Puppy fever.' },
      { id: 'c12006', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Adorable!' },
      { id: 'c12007', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Welcome to the family.' },
      { id: 'c12008', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'So fluffy!' },
      { id: 'c12009', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Best news today.' },
      { id: 'c12010', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Already in love.' }
    ],
    likes: ['u101', 'u102', 'u104', 'u105', 'u106', 'u108', 'u109', 'u110', 'u112', 'u115']
  },
  // 21
  {
    _id: 's121',
    txt: 'Bookstore afternoon – lost in pages for hours.',
    imgUrl: 'https://picsum.photos/470/300?random=121',
    createdAt: 1700100002121,
    by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' },
    comments: [
      { id: 'c12101', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Best way to spend a day.' },
      { id: 'c12102', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Which book?' },
      { id: 'c12103', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'I need recommendations.' },
      { id: 'c12104', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'I love bookstores.' },
      { id: 'c12105', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Get me a coffee!' },
      { id: 'c12106', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Page turner!' },
      { id: 'c12107', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'I’ll join next time.' },
      { id: 'c12108', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'What did you buy?' },
      { id: 'c12109', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Love this.' },
      { id: 'c12110', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Best afternoon.' }
    ],
    likes: ['u101', 'u102', 'u103', 'u104', 'u105', 'u106', 'u107', 'u109', 'u110', 'u115']
  },
  // 22
  {
    _id: 's122',
    txt: 'Home-baked challah – smells like Friday night.',
    imgUrl: 'https://picsum.photos/470/300?random=122',
    createdAt: 1700100002222,
    by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' },
    comments: [
      { id: 'c12201', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Recipe please!' },
      { id: 'c12202', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Looks perfect.' },
      { id: 'c12203', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Save me a slice!' },
      { id: 'c12204', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Shabbat shalom.' },
      { id: 'c12205', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'I can smell it!' },
      { id: 'c12206', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Looks delicious.' },
      { id: 'c12207', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Bake for me next week!' },
      { id: 'c12208', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Challah goals.' },
      { id: 'c12209', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Friday night at yours?' },
      { id: 'c12210', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Homemade is best.' }
    ],
    likes: ['u101', 'u102', 'u103', 'u104', 'u106', 'u107', 'u108', 'u109', 'u110', 'u114']
  },
  // 23
  {
    _id: 's123',
    txt: 'Nature reserve adventure – rare birds and wildflowers everywhere.',
    imgUrl: 'https://picsum.photos/470/300?random=123',
    createdAt: 1700100002323,
    by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' },
    comments: [
      { id: 'c12301', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Where is this place?' },
      { id: 'c12302', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Birdwatching is so relaxing.' },
      { id: 'c12303', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Great photo!' },
      { id: 'c12304', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'I want to visit!' },
      { id: 'c12305', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Nature rocks.' },
      { id: 'c12306', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Wildflowers season.' },
      { id: 'c12307', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Such colors.' },
      { id: 'c12308', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Did you see foxes?' },
      { id: 'c12309', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Wild nature!' },
      { id: 'c12310', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Adventure of the year.' }
    ],
    likes: ['u101', 'u102', 'u103', 'u105', 'u107', 'u108', 'u109', 'u110', 'u113', 'u115']
  },
  // 24
  {
    _id: 's124',
    txt: 'Museum visit – art, culture, and new perspectives.',
    imgUrl: 'https://picsum.photos/470/300?random=124',
    createdAt: 1700100002424,
    by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' },
    comments: [
      { id: 'c12401', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'Which museum?' },
      { id: 'c12402', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'Love art!' },
      { id: 'c12403', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Did you see the new exhibit?' },
      { id: 'c12404', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Sounds inspiring.' },
      { id: 'c12405', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'I need to go again.' },
      { id: 'c12406', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Great way to spend the day.' },
      { id: 'c12407', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Love modern art.' },
      { id: 'c12408', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Culture fix.' },
      { id: 'c12409', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Favorite artist?' },
      { id: 'c12410', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Best art tour!' }
    ],
    likes: ['u101', 'u102', 'u104', 'u105', 'u107', 'u108', 'u109', 'u110', 'u113', 'u114']
  },
  // 25
  {
    _id: 's125',
    txt: 'Cooking workshop – tried new recipes and made new friends.',
    imgUrl: 'https://picsum.photos/470/300?random=125',
    createdAt: 1700100002525,
    by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' },
    comments: [
      { id: 'c12501', by: { _id: 'u101', username: 'danielwallache', fullname: 'Daniel Wallache', imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg' }, txt: 'What did you cook?' },
      { id: 'c12502', by: { _id: 'u102', username: 'noa_b', fullname: 'Noa Benari', imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }, txt: 'I want the recipe.' },
      { id: 'c12503', by: { _id: 'u103', username: 'eli_cohen', fullname: 'Eli Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg' }, txt: 'Cooking is fun.' },
      { id: 'c12504', by: { _id: 'u104', username: 'yael_k', fullname: 'Yael Koren', imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg' }, txt: 'Can I join next time?' },
      { id: 'c12505', by: { _id: 'u105', username: 'amit_aviv', fullname: 'Amit Aviv', imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }, txt: 'Sounds delicious.' },
      { id: 'c12506', by: { _id: 'u106', username: 'tomer_b', fullname: 'Tomer Ben Tov', imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg' }, txt: 'Chef Maya!' },
      { id: 'c12507', by: { _id: 'u107', username: 'lior_photo', fullname: 'Lior Fine', imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg' }, txt: 'Cooking with friends = ❤️' },
      { id: 'c12508', by: { _id: 'u108', username: 'tal.g', fullname: 'Tal Green', imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg' }, txt: 'Best workshop ever.' },
      { id: 'c12509', by: { _id: 'u109', username: 'oren_z', fullname: 'Oren Zinger', imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg' }, txt: 'Next time I’ll bring dessert.' },
      { id: 'c12510', by: { _id: 'u110', username: 'maya_b', fullname: 'Maya Bar', imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg' }, txt: 'Can’t wait for the next one!' }
    ],
    likes: ['u101', 'u102', 'u103', 'u104', 'u106', 'u107', 'u108', 'u109', 'u110', 'u115']
  }
];
