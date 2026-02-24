import React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface TechItem {
  name: string;
  slug?: string; // Simple Icons slug (optional)
}

interface CarouselRowData {
  label: string;
  color: string;      // border / glow color
  textColor: string;  // badge text color
  bgColor: string;    // badge background
  items: TechItem[];
  direction: 'forward' | 'backward';
  speed: number;
}

const ROWS: CarouselRowData[] = [
  {
    label: 'Generative AI',
    color: '#00f3ff',
    textColor: '#00f3ff',
    bgColor: 'rgba(0,243,255,0.07)',
    direction: 'forward',
    speed: 1.1,
    items: [
      { name: 'LangChain',   slug: 'langchain' },
      { name: 'LangGraph' },
      { name: 'Agno' },
      { name: 'Crew AI' },
      { name: 'Hugging Face', slug: 'huggingface' },
      { name: 'Google ADK',  slug: 'google' },
      { name: 'LlamaIndex' },
      { name: 'Guardrails' },
    ],
  },
  {
    label: 'Cloud & Databases',
    color: '#bc13fe',
    textColor: '#bc13fe',
    bgColor: 'rgba(188,19,254,0.07)',
    direction: 'backward',
    speed: 1.0,
    items: [
      { name: 'Supabase',  slug: 'supabase' },
      { name: 'MongoDB',   slug: 'mongodb' },
      { name: 'Redis',     slug: 'redis' },
      { name: 'Pinecone' },
      { name: 'Chroma DB' },
      { name: 'AWS EC2',   slug: 'amazonaws' },
      { name: 'AWS S3',    slug: 'amazons3' },
      { name: 'SageMaker', slug: 'amazonsagemaker' },
      { name: 'Bedrock' },
      { name: 'Lambda',    slug: 'awslambda' },
    ],
  },
  {
    label: 'Python Libraries & Frameworks',
    color: '#f7c948',
    textColor: '#f7c948',
    bgColor: 'rgba(247,201,72,0.07)',
    direction: 'forward',
    speed: 1.3,
    items: [
      { name: 'Pandas',       slug: 'pandas' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Scikit-learn', slug: 'scikitlearn' },
      { name: 'TensorFlow',   slug: 'tensorflow' },
      { name: 'PyTorch',      slug: 'pytorch' },
      { name: 'FastAPI',      slug: 'fastapi' },
      { name: 'NLTK' },
      { name: 'spaCy' },
      { name: 'Beautiful Soup' },
      { name: 'Selenium',     slug: 'selenium' },
      { name: 'Fast MCP' },
      { name: 'Graphiti' },
      { name: 'Crawl4AI' },
      { name: 'Plotly',       slug: 'plotly' },
      { name: 'Streamlit',    slug: 'streamlit' },
      { name: 'Pydantic',     slug: 'pydantic' },
      { name: 'Django',       slug: 'django' },
    ],
  },
  {
    label: 'Tools & Software',
    color: '#39ff14',
    textColor: '#39ff14',
    bgColor: 'rgba(57,255,20,0.07)',
    direction: 'backward',
    speed: 0.9,
    items: [
      { name: 'Tableau',         slug: 'tableau' },
      { name: 'GitHub',          slug: 'github' },
      { name: 'Docker',          slug: 'docker' },
      { name: 'MLflow',          slug: 'mlflow' },
      { name: 'GitHub Actions',  slug: 'githubactions' },
      { name: 'LangFlow' },
      { name: 'LangSmith' },
      { name: 'LiveKit' },
      { name: 'LangFuse' },
    ],
  },
];

interface BadgeProps {
  item: TechItem;
  color: string;
  textColor: string;
  bgColor: string;
}

const TechBadge: React.FC<BadgeProps> = ({ item, color, textColor, bgColor }) => {
  const [iconLoaded, setIconLoaded] = React.useState(false);
  const [iconError, setIconError] = React.useState(false);

  return (
    <div
      className="group flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 cursor-default select-none whitespace-nowrap"
      style={{
        borderColor: `${color}30`,
        backgroundColor: bgColor,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = color;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 12px ${color}40`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}30`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      {item.slug && !iconError && (
        <img
          src={`https://cdn.simpleicons.org/${item.slug}/ffffff`}
          alt=""
          className="w-6 h-6 object-contain shrink-0"
          style={{ opacity: iconLoaded ? 0.85 : 0 }}
          onLoad={() => setIconLoaded(true)}
          onError={() => setIconError(true)}
        />
      )}
      {(!item.slug || iconError) && (
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
          style={{ backgroundColor: `${color}20`, color: textColor }}
        >
          {item.name.charAt(0)}
        </div>
      )}
      <span
        className="text-sm font-mono font-medium tracking-wide transition-colors duration-300"
        style={{ color: textColor }}
      >
        {item.name}
      </span>
    </div>
  );
};

interface RowProps {
  row: CarouselRowData;
}

const CarouselRow: React.FC<RowProps> = ({ row }) => (
  <div className="relative mb-4">
    <Carousel
      opts={{ loop: true }}
      plugins={[
        AutoScroll({
          playOnInit: true,
          speed: row.speed,
          direction: row.direction,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="ml-0">
        {row.items.map((item, i) => (
          <CarouselItem key={`${item.name}-${i}`} className="basis-auto pl-0 pr-3">
            <TechBadge
              item={item}
              color={row.color}
              textColor={row.textColor}
              bgColor={row.bgColor}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    {/* Fade edges */}
    <div
      className="absolute inset-y-0 left-0 w-16 md:w-24 z-10 pointer-events-none"
      style={{ background: `linear-gradient(to right, #050505, transparent)` }}
    />
    <div
      className="absolute inset-y-0 right-0 w-16 md:w-24 z-10 pointer-events-none"
      style={{ background: `linear-gradient(to left, #050505, transparent)` }}
    />
  </div>
);

export const TechStackCarousel: React.FC = () => {
  const flatItems = React.useMemo(
    () =>
      ROWS.flatMap((row) =>
        row.items.map((item) => ({
          item,
          color: row.color,
          textColor: row.textColor,
          bgColor: row.bgColor,
        })),
      ),
    [],
  );

  const loopItems = React.useMemo(() => {
    // Duplicate items to avoid visible gaps on loop.
    return [...flatItems, ...flatItems, ...flatItems];
  }, [flatItems]);

  return (
    <div className="relative z-20 overflow-hidden py-10">
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,243,255,0.08) 0%, transparent 70%)',
        }}
      />

      <Carousel
        opts={{ loop: true }}
        plugins={[
          AutoScroll({
            playOnInit: true,
            speed: 1.2,
            direction: 'forward',
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className="!ml-0 flex items-center py-4">
          {loopItems.map((entry, index) => (
            <CarouselItem
              key={`${entry.item.name}-${index}`}
              className="!basis-auto !pl-0 pr-6 py-2"
            >
              <TechBadge
                item={entry.item}
                color={entry.color}
                textColor={entry.textColor}
                bgColor={entry.bgColor}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-16 md:w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #050505, transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 md:w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #050505, transparent)' }}
      />
    </div>
  );
};
