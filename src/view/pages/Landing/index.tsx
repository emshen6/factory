import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { useGetProductsQuery } from '../../../core/api/product';
import { FactoryImage } from '../../../assets/image/FactoryImage';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { About } from '../../components/About';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
    const { data } = useGetProductsQuery();

    console.log(data);
    return (
        <div className={cx(styles.landing)}>
            <Header />
            <FactoryImage />
            <About />
            <Footer />
        </div>
    );
};
