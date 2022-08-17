import css from "./UserInfo.module.css";

const UserInfo = () => {
    return (
        <div className={css.userBlock}>
            <div className={css.userCircle}></div>
            <div>
                SomeName
            </div>
        </div>
    )
};

export { UserInfo }
