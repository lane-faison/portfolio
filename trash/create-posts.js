//
// exports.seed = function(knex, Promise) {
//
//   const text1 = [
//     "If you follow the course up until you reach the end of the row of ramps, you will see a narrow ramp that leads up to an opening in the mountain. To make the jump, you must to build up enough speed and hit the ramp straight on (parallel with the ramp), otherwise the if you're going too slow, or jump too far left or right, you will hit the wall and lose time. The easiest way to make this jump is by using either a Mushroom or a Star while going up the ramp. Alternatively, you can make the jump without an item by jumping with R button at the tip of the jump. If you are able to make the jump and land inside the opening to the cave, the shortcut cuts off a significant amount portion of the course.",
//   ].join("\n")
//
//   const text2 = [
//     "Start out by driving to the left side of the road. At about the second orange tile after the finish line, turn right. Then start a left facing slide, and come close close to the fence on the right. At about the third green tile after the finish line, push the control stick all the way to the left and brake to help turn more sharply. Hop at the left edge of the road to go over the star fence (this should happen at a red tile), and you'll land just before the end of the spiral. Watch out for the chomp that's there as you land.",
//   ].join("\n\n")
//
//   const text3 = [
//     "After the first hairpin turn to the right, jump from the edge of the grass on the left side of the road across the river, and hit the mountainside on the right side of the diagonal road. After falling into the water, Lakitu will put you down shortly before the big jump.",
//   ].join("\n\n")
//
//   const text4 = [
//     "Before the second railroad crossing, go to the left into the sand. After the part where you go downhill and then uphill, use a mushroom and aim towards part of the opposite side of the valley just next to the train tracks. Hop as you hit the bump, and you'll bounce over the train tracks and back on the road.",
//   ].join("\n\n")
//
//   const text5 = [
//     "From in front of the finish line, face left. Use a mushroom and hop and turn left at the edge of the level ground just before the grass starts going downhill. Hit the dark vertical line on the mountainside that's about lined up with the extended finish line. You'll be pushed to the left as you hit it, and Lakitu will bring you back to the road at the beginning of the next lap.",
//   ].join("\n\n")
//
//   return knex('comments').del()
//     .then(() => knex('posts').del())
//     .then(function () {
//       return Promise.all([
//         createPost(
//           'Koopa Troopa Beach Jump',
//           text1,
//           'YoshiMaster',
//           'https://cdn.wikimg.net/strategywiki/images/thumb/7/7d/MK64_Koopa_Troopa_Beach_mushroom_shortcut.jpg/200px-MK64_Koopa_Troopa_Beach_mushroom_shortcut.jpg',
//           new Date(2016, 12, 17)
//         ),
//         createPost(
//           'Rainbow Road Gap Jump',
//           text2,
//           'Toadster64',
//           'http://www.vizzed.com/vizzedboard/retro/user_screenshots/saves42/422278/NINTENDO64--Mario%20Kart%2064_Aug7%207_53_09.png',
//           new Date(2016, 11, 11)
//         ),
//         createPost(
//           "Royal Raceway Lakitu's Assist",
//           text3,
//           'LuigiHimself',
//           'http://www.vizzed.com/vizzedboard/retro/user_screenshots/saves38/389992/NINTENDO64--Mario%20Kart%2064_Jun14%2022_15_00.png',
//           new Date(2014, 5, 12)
//         ),
//         createPost(
//           "Kalimari Desert Railroad Jump",
//           text4,
//           'RedControllerWarrior',
//           'http://mariomayhem.com/bowsers_blog/wp-content/uploads/2014/10/MK64_Kalimari_Desert_shortcut_2.png',
//           new Date(2017, 1, 12)
//         ),
//         createPost(
//           "Yoshi Valley Lap Skip",
//           text5,
//           'LuigiHimself',
//           'http://i189.photobucket.com/albums/z276/regenerador/ValledeYoshy.png',
//           new Date(2017, 3, 12)
//         ),
//       ])
//     })
//     .then(function (postIds) {
//       return Promise.all([
//         knex('comments').insert({post_id: postIds[0], content: 'Ah yes, the jump that separates the men from the boys!'}),
//         knex('comments').insert({post_id: postIds[0], content: 'Generally I even out this shortcut by blowing it at least 2 of the 3 laps'}),
//         knex('comments').insert({post_id: postIds[2], content: 'This one rarely works for me'}),
//         knex('comments').insert({post_id: postIds[2], content: 'A helpful one but certainly not very exciting'}),
//         knex('comments').insert({post_id: postIds[3], content: 'This map is so easy you should not even need a shortcut!'}),
//         knex('comments').insert({post_id: postIds[4], content: 'There are few things more depressing than unsuccessfully falling off this mountain'}),
//
//
//       ])
//     })
//
//   function createPost(title, body, author, image_url, created_at) {
//     return knex('posts')
//       .insert({title, body, author, image_url, created_at})
//       .returning('id')
//       .then(ids => ids[0])
//   }
// };
