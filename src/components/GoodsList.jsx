import React from 'react';
import GoodsItem from './GoodsItem';

const GoodsList = ({ goods }) => {
  return (
    <div className="goods">
      {goods.map(good => (
        <GoodsItem
          key={good.mainId}
          id={good.mainId}
          title={good.displayName}
          description={good.displayDescription}
          poster={good.displayAssets[0].background}
          price={good.price.regularPrice}
        />
      ))}
    </div>
  );
};

export default GoodsList;
