import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';

export default function QuoteSection(props) {
    const { type, elementId, backgroundImage, colors, quote, name, title, styles = {}, 'data-sb-field-path': fieldPath } = props;
    return (
        <Section type={type} elementId={elementId} backgroundImage={backgroundImage} colors={colors} styles={styles.self} data-sb-field-path={fieldPath}>
            <blockquote>
                {quote && (
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className={classNames('sb-markdown', 'text-4xl', 'sm:text-6xl', 'sm:leading-tight', styles.quote ? mapStyles(styles.quote) : null)}
                        data-sb-field-path=".quote"
                    >
                        {quote}
                    </Markdown>
                )}
                {(name || title) && (
                    <footer className="mt-8 sm:mt-10">
                        {name && (
                            <span className={classNames('block', 'text-lg', styles.name ? mapStyles(styles.name) : null)} data-sb-field-path=".name">
                                {name}
                            </span>
                        )}
                        {title && (
                            <span className={classNames('block', 'text-lg', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                                {title}
                            </span>
                        )}
                    </footer>
                )}
            </blockquote>
        </Section>
    );
}
