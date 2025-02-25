export const users =
    [
        {
            user_id: "vishal_chouhan07",
            userName: "Vishal Chouhan",
            email: "vishal@example.com",
            bio: "To anyone that ever told you you're no good... they're no better.",
            profile_img: "https://images.unsplash.com/photo-1738830986753-7f4e8f3d18e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            followers: ["user_2", "user_3"],
            following: ["user_4", "user_5", "user_2", "user_20" , "user_15"],
            posts: [
                {
                    postId: "post_1",
                    profile_id: "vishal_chouhan07",
                    imageUrl: "https://images.unsplash.com/photo-1738830986230-57029d6ef4f8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    caption: "Enjoying the sunset 🌅",
                    likes: 12,
                    comments: [
                        { user_id: "vishal_chouhan07", comment: "Wow, amazing!" },
                        { user_id: "user_3", comment: "Beautiful view!" }
                    ]
                },
                {
                    postId: "post_2",
                    profile_id: "vishal_chouhan07",
                    imageUrl: "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    caption: "Enjoying the sunset 🌅",
                    likes: 12,
                    comments: [
                        { user_id: "user_2", comment: "Wow, amazing!" },
                        { user_id: "user_3", comment: "Beautiful view!" }

                    ]
                }
            ]
        },
        {
            user_id: "user_2",
            userName: "Rahul Sharma",
            email: "rahul@example.com",
            bio: "Keep smiling, keep shining 😊",
            profile_img: "https://images.unsplash.com/photo-1738332465678-597284760298?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
            followers: ["vishal_chouhan07"],
            following: ["user_3"],
            posts: [
                {
                    postId: "post_2",
                    profile_id: "user_2",
                    imageUrl: "https://images.unsplash.com/photo-1739030026689-f73631404ff4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
                    caption: "Weekend vibes! ☕",
                    likes: 8,
                    comments: [{ user_id: "vishal_chouhan07", comment: "Looks relaxing!" },
                    { user_id: "vishal_chouhan07", comment: "nice" }
                    ]
                },
                {
                    postId: "post_1233",
                    profile_id: "user_2",
                    imageUrl: "https://images.unsplash.com/photo-1739030026689-f73631404ff4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
                    caption: "natural vibe ☕",
                    likes: 8,
                    comments: [{ user_id: "vishal_chouhan07", comment: "Looks relaxing!" },
                    { user_id: "vishal_chouhan07", comment: "nice" }
                    ]
                }
            ]
        },
        {
            user_id: "user_3",
            userName: "Sneha Patel",
            email: "sneha@example.com",
            bio: "Travel | Food | Books 📚✈️",
            profile_img: "https://randomuser.me/api/portraits/women/3.jpg",
            followers: ["user_2", "vishal_chouhan07"],
            following: ["user_4"],
            posts: [
                {
                    postId: "post_3",
                    profile_id: "user_3",
                    imageUrl: "https://source.unsplash.com/random/300x300?sig=3",
                    caption: "Just finished a great book! 📖",
                    likes: 15,
                    comments: [
                        { user_id: "user_2", comment: "Which book?" },
                        { user_id: "vishal_chouhan07", comment: "I need recommendations!" }
                    ]
                }
            ]
        },
        {
            user_id: "user_4",
            userName: "Aman Verma",
            email: "aman@example.com",
            bio: "Coding is my passion 💻🔥",
            profile_img: "https://randomuser.me/api/portraits/men/4.jpg",
            followers: ["user_3"],
            following: ["user_5", "user_6"],
            posts: [
                {
                    postId: "post_4",
                    profile_id: "user_4",
                    imageUrl: "https://images.unsplash.com/photo-1712068907555-007806d33714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
                    caption: "Late-night coding sessions! 😴💡",
                    likes: 20,
                    comments: [
                        { user_id: "user_5", comment: "Same here!" },
                        { user_id: "user_6", comment: "Respect bro! 🔥" }
                    ]
                }
            ]
        },
        {
            user_id: "user_5",
            userName: "Priya Sharma",
            email: "priya@example.com",
            bio: "Nature lover 🌿✨",
            profile_img: "https://randomuser.me/api/portraits/women/5.jpg",
            followers: ["user_4", "vishal_chouhan07"],
            following: ["user_6", "user_7"],
            posts: [
                {
                    postId: "post_5",
                    profile_id: "user_5",
                    imageUrl: "https://images.unsplash.com/photo-1738969197189-72def464dde3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
                    caption: "Morning hikes are the best! ⛰️",
                    likes: 18,
                    comments: [{ user_id: "user_4", comment: "Totally agree!" }]
                }
            ]
        },
        {
            user_id: "user_6",
            userName: "Rohan Mehta",
            email: "rohan@example.com",
            bio: "Fitness freak 💪🏽🏃",
            profile_img: "https://randomuser.me/api/portraits/men/6.jpg",
            followers: ["user_5"],
            following: ["user_7", "user_8"],
            posts: [
                {
                    postId: "post_6",
                    profile_id: "user_6",
                    imageUrl: "https://source.unsplash.com/random/300x300?sig=6",
                    caption: "Gym time! 🏋️‍♂️",
                    likes: 25,
                    comments: [{ user_id: "user_5", comment: "Beast mode! 🔥" }]
                }
            ]
        },
        {
            user_id: "user_7",
            userName: "Neha Singh",
            email: "neha@example.com",
            bio: "Music & Art 🎶🎨",
            profile_img: "https://randomuser.me/api/portraits/women/7.jpg",
            followers: ["user_6"],
            following: ["user_8"],
            posts: [
                {
                    postId: "post_7",
                    profile_id: "user_7",
                    imageUrl: "https://source.unsplash.com/random/300x300?sig=7",
                    caption: "Painting my thoughts 🎨✨",
                    likes: 22,
                    comments: [{ user_id: "user_6", comment: "Beautiful artwork!" }]
                }
            ]
        },
        {
            user_id: "user_8",
            userName: "Aakash Gupta",
            email: "aakash@example.com",
            bio: "Adventurer 🌍",
            profile_img: "https://randomuser.me/api/portraits/men/8.jpg",
            followers: ["user_7"],
            following: ["user_9", "user_10"],
            posts: [
                {
                    postId: "post_8",
                    profile_id: "user_8",
                    imageUrl: "https://source.unsplash.com/random/300x300?sig=8",
                    caption: "Camping under the stars 🌌",
                    likes: 30,
                    comments: [{ user_id: "user_7", comment: "So peaceful!" }]
                }
            ]
        },
        {
            user_id: "user_9",
            userName: "Ananya Das",
            email: "ananya@example.com",
            bio: "Dancer 💃 | Dreamer ✨",
            profile_img: "https://randomuser.me/api/portraits/women/9.jpg",
            followers: ["user_8"],
            following: ["user_10"],
            posts: [
                {
                    postId: "post_9",
                    profile_id: "user_9",
                    imageUrl: "https://source.unsplash.com/random/300x300?sig=9",
                    caption: "Dance is the language of my soul 🎶",
                    likes: 28,
                    comments: [{ user_id: "user_8", comment: "Keep rocking!" }]
                }
            ]
        },
        {
            user_id: "user_10",
            userName: "Siddharth Kapoor",
            email: "siddharth@example.com",
            bio: "Tech Enthusiast 🤖",
            profile_img: "https://randomuser.me/api/portraits/men/10.jpg",
            followers: ["user_9"],
            following: [],
            posts: [
                {
                    postId: "post_10",
                    profile_id: "user_10",
                    imageUrl: "https://source.unsplash.com/random/300x300?sig=10",
                    caption: "Building my first AI project 🤖🔥",
                    likes: 35,
                    comments: [{ user_id: "user_9", comment: "Sounds exciting!" }]
                }
            ]},
                {
                    user_id: "user_15",
                    userName: "Krishna Nair",
                    email: "krishna@example.com",
                    bio: "Poet & Storyteller ✍️",
                    profile_img: "https://randomuser.me/api/portraits/men/15.jpg",
                    followers: ["user_12", "user_17"],
                    following: ["user_16", "user_18"],
                    posts: [
                        {
                            postId: "post_15",
                            profile_id: "user_15",
                            imageUrl: "https://source.unsplash.com/400x400/?writing",
                            caption: "Writing my next masterpiece ✒️",
                            likes: 38,
                            comments: [{ "user_id": "user_12", "comment": "Can't wait to read it!" }]
                        }
                    ]
                },
                {
                    user_id: "user_20",
                    userName: "Tanvi Roy",
                    email: "tanvi@example.com",
                    bio: "Dreamer & Wanderer 🌍",
                    profile_img: "https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
                    followers: ["user_18", "user_19"],
                    following: ["user_15"],
                    posts: [
                        {
                            postId: "post_20",
                            profile_id: "user_20",
                            imageUrl: "https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
                            caption: "Wandering through the mountains 🏔️",
                            likes: 42,
                            comments: [{ "user_id": "user_18", "comment": "Amazing view!" }]
                        }
                    ]
                },

    ]