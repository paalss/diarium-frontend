import { entry } from '../List/List';
import classes from './ListItem.module.css';

interface ListItemProps {
    entry: entry;
}

const ListItem = ({ entry }: ListItemProps) => {
    return (
        <li className={classes.root}>
            <h2>{entry.heading}</h2>
            <p>
                {entry.date}

                {entry.tags.length >= 1 ? (
                    <>
                        {' '}
                        - Tags:{' '}
                        {entry.tags.map((tag) => (
                            <span key={tag}>{tag} </span>
                        ))}
                    </>
                ) : (
                    <> - No tags</>
                )}
            </p>
        </li>
    );
};

export { ListItem };
