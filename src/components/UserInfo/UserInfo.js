import css from "./UserInfo.module.css";

const UserInfo = () => {
    return (
        <div className={css.userBlock}>
            <div className={css.userCircle}></div>
            <div>
                <h3>
                    Some name
                </h3>
            </div>
        </div>
    )
};

export { UserInfo }