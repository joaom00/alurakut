import React from 'react'

const Tabs = ({ defaultIndex = 0, children }) => {
  const [bindIndex, setBindIndex] = React.useState(defaultIndex);

  function changeTab(newIndex) {
    setBindIndex(newIndex);
  }

  const items = children?.filter((item) => item.type.name === 'TabItem');

  return (
    <div>
      <div>
        {items?.map(({ props: { index, label } }) => (
          <button key={index} onClick={() => changeTab(index)}>
            {label}
          </button>
        ))}
      </div>
      <div>
        {items?.map(({ props }) => (
          <div key={props.index}></div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
