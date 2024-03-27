import React, { useEffect, useState } from "react";
import styles from './users.module.scss'
import axios from "axios";
import userAva from "../../assets/images/defaultAva.png";
import { connect } from "react-redux";

import { followActionCreate as follow, 
        unfollowActionCreate as unfollow,
        setUsersActionCreate as setUsers,
        setCurrentPageActionCreate as setCurrentPage,
        setTotalUsersActionCreate as setTotalUsersCount} from "./../../actions/users";


const Users = ({ users: data = [], setUsers: setUsersToStore, follow, unfollow, pageSize, totalUsersCount, currentPage, setCurrentPage, setTotalUsersCount }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const [users, setUsers] = useState(data);

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
            setUsersToStore(response.data.items);
            setTotalUsersCount(response.data.totalCount);
            console.log(response.data.totalCount);
        });
    }, []);

    useEffect(() => {
        if (data && data.length > 0) {
            setUsers(data);
        }
    }, [data]);

    const nextPage = (pageNumber) => {
        setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`).then(response => {
            setUsersToStore(response.data.items);
        });
    }

    return <div className={styles.users}>
        <div className={styles.pagination}>
            {pages.map(p => {
                return <span key={p} className={ currentPage === p ? styles.selectedPage : styles.unselectedPage} onClick={() => nextPage(p)}>{p}</span>
            })}
        </div>
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
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);