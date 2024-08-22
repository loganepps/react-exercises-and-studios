import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://www.allrecipes.com/recipe/27252/best-potatoes-youll-ever-taste/";
    let authorPhoto = "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTdnyGD7W4tFZWskDT8NOQRraK5KHrFgU9FGKNsrDbsK7ePWDX9a51W4O0ZiVhhS4vN";
    let authorName = "Michael Waters";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="photo of the author" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Can you believe an otter cooked these potatoes?</a> 
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
            return(
                <div>
                    <div>
                        <h1>Best Potatoes You&apos;ll Ever Taste</h1>
                        <p>
                            Since trying these, 
                            I have gone completely potato crazy 
                            with mad potato disease!!!
                        </p>
                    </div>
                    <RecipeAuthor />
                </div>
            );
        }
    }

export default RecipeDescription; RecipeAuthor;
