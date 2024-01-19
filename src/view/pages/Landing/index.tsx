import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import Icon from '../../components/UI/Icon';
import { ICON } from '../../components/UI/Icon/IconType.tsx';
import { useGetProductsQuery } from '../../../core/api/product';
import { FactoryImage } from '../../../assets/image/FactoryImage';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Header } from '../../components/Header';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
    const { data } = useGetProductsQuery();

    console.log(data);
    return (
        <div className={cx(styles.landing)}>
            <ContentWrapper>
                <Header />
                <FactoryImage />
            </ContentWrapper>
        </div>
    );
};
