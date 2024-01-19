import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import Icon from '../../components/UI/Icon';
import { ICON } from '../../components/UI/Icon/IconType.tsx';
import { useGetProductsQuery } from '../../../core/api/product';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
    const { data } = useGetProductsQuery();

    console.log(data);
    return (
        <div className={cx(styles.landing)}>
            <div className={'container block'}></div>
            <Icon icon={ICON.LOGO} width={175} height={55} color={'black'} />
        </div>
    );
};
