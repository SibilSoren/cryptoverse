import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const Cryptocurrencies = ({ simplified }) => {
    const { coins } = useSelector(state => state.cryptoCoins);
    // console.log(coins)

    if (coins
        && Object.keys(coins).length === 0
        && Object.getPrototypeOf(coins) === Object.prototype) return "Loading..."


    let cryptos = [...coins.coins];

    if (simplified) {
        cryptos = cryptos.slice(0, 10);
    }
    // console.log(cryptos)

    return (
        <div>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (

                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/cryptp/${currency.id}`}>
                            <Card title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}

            </Row>
        </div>
    )
}

export default Cryptocurrencies
