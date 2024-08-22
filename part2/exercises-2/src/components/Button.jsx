import "./styles.css";

function Button() {
  const onLearnMore = () => alert("Let's get wet and salty!");

  return <button onClick={onLearnMore}>Learn More</button>;
}

export default Button;
