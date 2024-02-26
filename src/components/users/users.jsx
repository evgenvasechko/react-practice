import React, { useEffect, useState } from "react";
import styles from './users.module.scss'
import axios from "axios";
import userAva from "../../assets/images/defaultAva.png";
import { connect } from "react-redux";

import { followActionCreate as follow, 
        unfollowActionCreate as unfollow,
        setUsersActionCreate as setUsers } from "./../../actions/users";


const Users = ({ users: data = [], setUsers: setUsersToStore, follow, unfollow }) => {
    const [users, setUsers] = useState(data);

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsersToStore(response.data.items);
        });
    }, []);

    useEffect(() => {
        if (data && data.length > 0) {
            setUsers(data);
        }
    }, [data]);

    return <div className={styles.users}>
        {users.length > 0 &&
            users.map(u => <div key={u.id}>
                <div className={styles.user}>
                    <div className={styles.user__short}>
                        <div className={styles.user__avatar}>
                            <img src={u.photos.small != null ? u.photos.small : userAva} alt="ava image here" />
                        </div>
                        <div>{u.name}</div>
                    </div>
                    <div className={styles.user__bio}>
                        <div>{u.status}</div>
                        <div>{"u.location.city + ', ' + u.location.country"}</div>
                    </div>
                    <div className={styles.user__following}>
                        {
                        u.followed ? 
                        <button className="button button_true" onClick={ () => {unfollow(u.id)} }>Unfollow</button> :
                        <button className="button button_false" onClick={ () => {follow(u.id)} }>Follow</button>
                        }
                    </div>
                </div>

            </div>)
        }
    </div>
}


const mapStateToProps = (state) => ({
    users: state.usersPage.usersData,
});

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);