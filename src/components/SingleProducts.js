import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

// Components
import MainForm from '../components/MainForm'
import ProductShowCase from '../components/ProductShowCase'
import { PdfFile } from './Icons'
import Tooltip from './Tooltip'

// Utils
import numberWithSpaces from '../utils/numberWithSpaces'

const Grid = styled.div`
    display: grid;
    grid-column-gap: 70px;

    /* Custom, iPhone Retina */
    @media only screen and (min-width: 320px) {
        grid-template-columns: repeat(1, 1fr);
        .showcase {
            .mobile-title {
                display: block;
            }
        }
        .product-description {
            .desktop-title {
                display: none;
            }
        }
    }

    /* Small Devices, Tablets */
    @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        .showcase {
            .mobile-title {
                display: none;
            }
        }
        .product-description {
            .desktop-title {
                display: block;
            }
        }
    }

    margin: 0 auto;
    max-width: 1600px;
    padding: 0 1.0875rem 1.45rem;
    .product-description {
        h2 {
            font-size: 33px;
            font-weight: 900;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000000;
        }
        &__list {
            margin: 0;
            list-style: none;
            li {
                hr {
                    background-color: #000000;
                    opacity: 0.5;
                    margin: 0 10px;
                }
                &:last-child {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
    .product-includes {
        p {
            font-size: 20px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000000;
            margin-bottom: 20px;
        }
        ul {
            li {
                font-size: 18px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #000000;
                margin-bottom: 12px;
            }
        }
    }

    .product-price {
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
        margin-bottom: 32px;
        span {
            font-size: 36px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #000000;
        }
    }
`

const SingleProducts = ({
    reference,
    productId,
    setFilename,
    onHandleOpenZoomInModal,
}) => {
    const { allFurnitureJson } = useStaticQuery(
        graphql`
            query {
                allFurnitureJson {
                    nodes {
                        id
                        image
                        title
                        description
                        reference
                        price
                        material
                        legs
                        filling
                        mattress_base
                        niche_for_things
                        construction
                        mechanism
                        additionally
                        product {
                            id
                            image
                        }
                        couchSize {
                            value
                            price
                            label
                        }
                        mattress {
                            value
                            label
                        }
                        mattressSize {
                            value
                            label
                            sans
                            soft
                        }
                    }
                }
            }
        `
    )

    const data = allFurnitureJson.nodes.find(item => item.id === productId)

    return (
        <section ref={reference} id={data.id}>
            {!data ? (
                <div>???????????? ???? ??????????????</div>
            ) : (
                <>
                    <Grid>
                        <div className="showcase">
                            <h2 className="mobile-title">{data.title}</h2>
                            <ProductShowCase
                                item={data}
                                setFilename={setFilename}
                                onHandleOpenZoomInModal={
                                    onHandleOpenZoomInModal
                                }
                            />
                        </div>
                        <div className="product-description">
                            <h2 className="desktop-title">{data.title}</h2>
                            <ul className="product-description__list">
                                <li>
                                    ????????????????: &nbsp;&nbsp;{' '}
                                    <strong>{data.material}</strong>
                                </li>
                                <li>
                                    ??????????: &nbsp;&nbsp;{' '}
                                    <strong>{data.legs}</strong>
                                </li>
                                <li>
                                    ????????????????????: &nbsp;&nbsp;{' '}
                                    <strong>{data.filling}</strong>
                                </li>
                                <li>
                                    ???????????? ?????? ????????????: &nbsp;&nbsp;
                                    <strong>{data.mattress_base}</strong>
                                </li>
                                {data.niche_for_things && (
                                    <li>
                                        ???????? ?????? ??????????: &nbsp;&nbsp;{' '}
                                        <strong>
                                            {data.niche_for_things
                                                ? '????????'
                                                : '??????'}
                                        </strong>
                                    </li>
                                )}
                                <li>
                                    ??????????????????????: &nbsp;&nbsp;{' '}
                                    <strong>{data.construction}</strong>
                                </li>
                                {data.mechanism && (
                                    <li>
                                        ????????????????: &nbsp;&nbsp;{' '}
                                        <strong>{data.mechanism}</strong>
                                    </li>
                                )}
                                <li>
                                    ??????????????????????????: &nbsp;&nbsp;{' '}
                                    <strong>{data.additionally}</strong>
                                </li>
                                <li>
                                    ???????????? (???? ??????????????): &nbsp;&nbsp;
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <strong> ???????????? ??????????</strong>
                                            <Tooltip iconStyles={true}>
                                                <div
                                                    style={{
                                                        position: 'relative',
                                                        zIndex: 9999999,
                                                    }}
                                                >
                                                    <h5>???????????? ??????????</h5>
                                                    <p>
                                                        ?????? ??????????????:
                                                        ????????????????????????
                                                    </p>
                                                    <p>???????????? ????????????: 26 ????</p>
                                                    <p>??????????????????: 3/2</p>
                                                    <p>
                                                        ???????????????? ???? ????????????????
                                                        ?????????? ???? 170 ????
                                                    </p>
                                                    <p>
                                                        ??????????????????????????: ??????????????,
                                                        Matroluxe
                                                    </p>
                                                    <img
                                                        style={{
                                                            marginTop: 30,
                                                        }}
                                                        alt="???????????? ??????????"
                                                        src="https://res.cloudinary.com/https-capitonestyle-com/image/upload/v1581880995/matras_furgll.jpg"
                                                    />
                                                </div>
                                            </Tooltip>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <strong>???????????? ??????????-??????????</strong>
                                            <Tooltip iconStyles={true}>
                                                <h5>???????????? ????????????-??????????</h5>
                                                <p>?????? ??????????????: ????????????????????????</p>
                                                <p>???????????? ????????????: 22 ????</p>
                                                <p>??????????????????: 4/4</p>
                                                <p>
                                                    ???????????????? ???? ???????????????? ??????????
                                                    ???? 150 ????
                                                </p>
                                                <p>
                                                    ??????????????????????????: ??????????????,
                                                    Matroluxe
                                                </p>
                                                <img
                                                    style={{ marginTop: 30 }}
                                                    alt="????????????-??????????"
                                                    src="https://res.cloudinary.com/https-capitonestyle-com/image/upload/v1581880995/matras2_hsxzxr.jpg"
                                                />
                                            </Tooltip>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <hr />
                            <div className="product-includes">
                                <p>???????????? ?? ???????????????? ???? ??????????????????:</p>
                                <ul>
                                    <li>?????? / ??????</li>
                                    <li>?????????????? ????????????</li>
                                    <li>???????????????????? ???? ?????????? ?? ????????????</li>
                                    <li>?????????????????????? ??????????</li>
                                </ul>
                                <div
                                    style={{
                                        marginBottom: 45,
                                    }}
                                >
                                    <a
                                        href="https://res.cloudinary.com/https-capitonestyle-com/image/upload/v1581886341/warranty_vvjfhy.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        role="button"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: '#000000',
                                        }}
                                    >
                                        ???????????? ???????????????? ????????????????
                                        <PdfFile style={{ marginLeft: 15 }} />
                                    </a>
                                </div>
                            </div>
                            <div className="product-price">
                                ????{' '}
                                <span>{numberWithSpaces(data.price)} ??????</span>
                            </div>
                            <hr />
                            {/* Main form */}
                            <MainForm data={data} />
                        </div>
                    </Grid>
                </>
            )}
        </section>
    )
}

export default SingleProducts
