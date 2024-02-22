const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
        
    usersData: [
        // {
        //     id: 1,
        //     firstName: 'John',
        //     lastName: 'Doe',
        //     avatar: 'https://pics.craiyon.com/2023-07-16/75d48a4d2c194d48819f84ff7d167c40.webp',
        //     followed: false,
        //     status: 'Almost nobody, just in the middle',
        //     location: {
        //         city: 'New-York',
        //         country: 'USA'
        //     }
        // },
        // {
        //     id: 2,
        //     firstName: 'Jane',
        //     lastName: 'Haas',
        //     avatar: 'https://www.shutterstock.com/image-vector/panda-abstract-neon-portrait-style-260nw-2075675626.jpg',
        //     followed: true,
        //     status: 'Gunter is not my relative.)',
        //     location: {
        //         city: 'Spielberg',
        //         country: 'Austria'
        //     }
        // },
        // {
        //     id: 3,
        //     firstName: 'Lewis',
        //     lastName: 'Hamilton',
        //     avatar: 'https://img.freepik.com/premium-photo/beautiful-glowing-cool-neon-cat-animal-wallpaper-ai-generated-art_848903-3129.jpg',
        //     followed: true,
        //     status: '8th champion and fuck off, my haters!',
        //     location: {
        //         city: 'London',
        //         country: 'Great Britain'
        //     }
        // },
        // {
        //     id: 4,
        //     firstName: 'Toto',
        //     lastName: 'Wolf',
        //     avatar: 'https://i.etsystatic.com/39109891/r/il/193439/4562443033/il_570xN.4562443033_ct1n.jpg',
        //     followed: true,
        //     status: 'Principal of AMG Mercedes F1 team.',
        //     location: {
        //         city: 'Berlin',
        //         country: 'Germany'
        //     }
        // },
        // {
        //     id: 5,
        //     firstName: 'Merlin',
        //     lastName: 'Manson',
        //     avatar: 'https://www.shutterstock.com/image-vector/owl-abstract-neon-graphic-portrait-260nw-2177241369.jpg',
        //     followed: true,
        //     status: 'Sweet dreams',
        //     location: {
        //         city: 'New Orleans',
        //         country: 'USA'
        //     }
        // },
        // {
        //     id: 6,
        //     firstName: 'What',
        //     lastName: 'Are',
        //     avatar: 'https://www.shutterstock.com/image-vector/bear-abstract-neon-portrait-bears-260nw-2093758387.jpg',
        //     followed: false,
        //     status: 'You thinking about..?',
        //     location: {
        //         city: 'Middle',
        //         country: 'Nowhere'
        //     }
        // }
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, usersData: action.usersData}
        default: return state;
    }
}

export const followActionCreate = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreate = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreate = (usersData) => ({type: SET_USERS, usersData})

export default usersReducer;