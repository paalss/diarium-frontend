import { entry } from '../List/List';
import classes from './ListItem.module.css';

interface ListItemProps {
    entry: entry;
}

const ListItem = ({ entry }: ListItemProps) => {
    const { heading, date, tags, html, tracker } = entry

    const unixTimestamp: number = Date.parse(date)
    const event = new Date(unixTimestamp)
    const postDate = event.toLocaleDateString("no", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <li className={classes.root}>
            <h2>{heading}</h2>
            <p>
                {postDate}

                {tags.length >= 1 ? (
                    <>
                        {' '}
                        - Tags:{' '}
                        {tags.map((tag) => (
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
