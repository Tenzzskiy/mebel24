import React from 'react';
import styles from './AddModal.module.scss'
import AddModalBucketIcon from "../../icons/AddModalBucketIcon";
import AddModalFavouriteIcon from "../../icons/AddModalFavouriteIcon";
const AddModal = ({setAddModal,catalog=true}:any) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.flex}>
                {catalog ?
                <>
                    <AddModalBucketIcon />
                    <span>Товар добавлен в корзину</span>
                </>
                    :

                    <>
                    <AddModalFavouriteIcon />
                    <span>Товар добавлен в избранные</span>
                    </>
                }
            </div>
            </div>
        </div>
    );
};

export default AddModal;