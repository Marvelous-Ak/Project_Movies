import React, { memo } from 'react';

const Title = memo(({title}:{title:string}) => {
    return (
        <div className="container title">
        <h3>{title}</h3>
      </div>
    );
});

export default Title;