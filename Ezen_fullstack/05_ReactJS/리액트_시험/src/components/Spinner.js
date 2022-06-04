import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Bars } from 'react-loader-spinner';

const TransLayer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    background-color: #0003;
    width: 100%;
    height: 100%;
`;

const Spinner = ({ visible, color, width, height }) => {
    return (
        <>
            {visible && (
                <TransLayer>
                    <Bars 
                        color={color}
                        height={height}
                        width={width}
                        wrapperStyle={{
                            position: 'absolute',
                            zIndex: 10000,
                            left: '50%',
                            top: '50%',
                            marginLeft: (-width/2) + 'px',
                            marginTop: (height/2) + 'px'
                        }}
                    />
                </TransLayer>
            )}
        </>
    );
};

Spinner.defaultProps = {
    visible: false,
    color: '#06f',
    width: 100,
    height: 100
};

Spinner.propTypes = {
    visible: PropTypes.bool.isRequired,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default React.memo(Spinner);