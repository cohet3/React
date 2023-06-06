import PropTypes from "prop-types";

// const newMessage2 = {
//     nombre:'Daniel',
//     ciudad:'Quito',
//     edad:'20',
// };

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props);
  // if ( !title ) {
  //     throw new Error('El title no existe')
  // }

  return (
    <>
      <h2>{title}</h2>
      {/* <code>{ JSON.stringify( newMessage2 ) }</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
FirstApp.defaultProps = {
  title: "no hay titulo",
  subTitle: "no hay subtitulo",
  name: "DAnny Rodas",
};
