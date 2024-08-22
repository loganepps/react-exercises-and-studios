import styles from "./Description.module.css";

export default function RecipePhoto() {
  return (
    <img
      src="https://www.allrecipes.com/thmb/T1qwdyv1tPehfuIuf68y6kDCAH8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/27252-best-potatoes-youll-ever-taste-DDMFS-4x3-1596-f7d151977d8a40a985f18d35fa9f6588.jpg"
      alt="The potatoes in question"
      className={styles.imageUpdates}
    />
  );
}
