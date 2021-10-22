import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { Cryptocurrencies, News } from '.';
import { useSelector } from 'react-redux';
import { Spinner } from "react-bootstrap";

const { Title } = Typography;
const HomePage = () => {
    const { cryptoGlobalStats } = useSelector(state => state.cryptoGlobalStats);
    // console.log(cryptoGlobalStats);

    if (cryptoGlobalStats
        && Object.keys(cryptoGlobalStats).length === 0
        && Object.getPrototypeOf(cryptoGlobalStats) === Object.prototype) return "Loading..."
    return (
        <div>
            <Title level={2} className="heading">Crypto Global Stats</Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Crytocurrencies" value={cryptoGlobalStats.totalCoins} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value={millify(cryptoGlobalStats.totalExchanges)} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap" value={millify(cryptoGlobalStats.totalMarketCap)} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24th Volume" value={millify(cryptoGlobalStats.total24hVolume)} />
                </Col>
                <Statistic title="Total Markets" value={millify(cryptoGlobalStats.totalMarkets)} />
                <Col span={12}></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in world</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified />
        </div>
    )
}

export default HomePage
