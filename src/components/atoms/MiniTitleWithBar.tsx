interface MiniTitleWithBarProps {
    content: React.ReactNode;
    color?: string;
    textColor?: string;
}

export default function MiniTitleWithBar({ content, color = 'red', textColor='' }: MiniTitleWithBarProps) {
    return (
        <div className="position-relative d-inline-block">
            <small
                className={`mini-title-with-bar-${color} m-0 uppercase text-${textColor}`}
                style={{ fontSize: '0.8rem' }}
            >
                {content}
            </small>
        </div>
    );
}
