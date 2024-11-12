import React from 'react';

export function BulletedListBlock({ block }) {
    console.log('block:', block);

    // Extraire le texte du bloc
    const listItemText = block.bulleted_list_item.rich_text.map((text) => text.plain_text).join('');

    return (
        <ul className="list-disc pl-5">
            <li>
                <p className="text-base">{listItemText}</p>
            </li>
        </ul>
    );
}