

import {  BotIcon, BotOffIcon, CalendarIcon } from "lucide-react";
import LinkCardArrow from "../ui/LinkCardArrow";

const profileText = `# 覃江扮 Jiangban Qin
2002年射手座生于广西，MBTI:INFJ
语言:简体中文、壮语、桂柳话（西南官话分支）

兴趣爱好:NBA篮球，绘画、影视、看书学毛选、易经思维、太极哲学、中医养生、科技商业学习乔布斯创新与伊隆马斯克的第一性原理，培养金融与投资思维。
毕业于南宁职业技术大学商学院市场营销专业，2020年上高中时上网接触到Bitcoin，学习区块链知识，上大学后不影响学业情况下自学区块链相关技术，开发DAPP网站，2022年GPT时刻后，AI兴起并利用AI辅助学习。并独立开发多个DAPP：去中心化社交平台、Swap平台、NFT销售、区块链小游戏等。`

type Block =
  | { type: "h1"; content: string }
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "hr" }
  | { type: "list"; items: string[] }
  | { type: "paragraph"; lines: string[] };

type Section = {
  title: string;
  blocks: Block[];
};

type SubSection = {
  title?: string;
  blocks: Block[];
};

function parseProfileText(text: string): Block[] {
  const lines = text.split("\n");
  const blocks: Block[] = [];
  let currentParagraph: string[] = [];
  let currentList: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      blocks.push({ type: "paragraph", lines: [...currentParagraph] });
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList.length > 0) {
      blocks.push({ type: "list", items: [...currentList] });
      currentList = [];
    }
  };

  for (const line of lines) {
    if (line.trim() === "") {
      flushParagraph();
      flushList();
      continue;
    }

    if (line === "") {
      flushParagraph();
      flushList();
      blocks.push({ type: "hr" });
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h3", content: line.slice(4) });
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", content: line.slice(3) });
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h1", content: line.slice(2) });
      continue;
    }

    if (line.startsWith("* ")) {
      flushParagraph();
      currentList.push(line.slice(2));
      continue;
    }

    flushList();
    currentParagraph.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function splitSections(blocks: Block[]) {
  const intro: Block[] = [];
  const sections: Section[] = [];
  let currentSection: Section | null = null;

  for (const block of blocks) {
    if (block.type === "h2") {
      currentSection = {
        title: block.content,
        blocks: [],
      };
      sections.push(currentSection);
      continue;
    }

    if (currentSection) {
      currentSection.blocks.push(block);
    } else {
      intro.push(block);
    }
  }

  return { intro, sections };
}

function splitSubSections(blocks: Block[]) {
  const groups: SubSection[] = [];
  let currentGroup: SubSection = { blocks: [] };

  for (const block of blocks) {
    if (block.type === "h3") {
      if (currentGroup.title || currentGroup.blocks.length > 0) {
        groups.push(currentGroup);
      }

      currentGroup = {
        title: block.content,
        blocks: [],
      };
      continue;
    }

    currentGroup.blocks.push(block);
  }

  if (currentGroup.title || currentGroup.blocks.length > 0) {
    groups.push(currentGroup);
  }

  return groups;
}



function HeroTitle({ children }: { children: string }) {
  return <h3 className="text-2xl font-bold tracking-tight text-black">{children}</h3>;
}

function SectionHeading({ children }: { children: string }) {
  return <h4 className="text-xl font-bold tracking-tight text-zinc-950">{children}</h4>;
}

function SubSectionHeading({ children }: { children: string }) {
  return (
    <div className="border-l-4 border-brand pl-3">
      <h5 className="text-base font-semibold tracking-tight text-zinc-900">
        {children}
      </h5>
    </div>
  );
}

function ParagraphGroup({
  lines,
  emphasis = false,
}: {
  lines: string[];
  emphasis?: boolean;
}) {
  return (
    <div className="space-y-2">
      {lines.map((line, index) => (
        <p
          key={`${line}-${index}`}
          className={
            emphasis
              ? "text-sm leading-7 text-zinc-800"
              : "text-sm leading-7 text-zinc-700"
          }
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-5 gap-y-1 rounded-xl  border-zinc-200 bg-white p-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="flex items-start gap-2.5 text-sm leading-6 text-zinc-800"
        >
          <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <div className="h-px w-full bg-zinc-200" />;
}

function IntroCard({ blocks }: { blocks: Block[] }) {
  return (
    <div className="rounded-[20px] border border-zinc-200 bg-white p-5">
      <div className="space-y-3">
        {blocks.map((block, index) => {
          if (block.type === "h1") {
            return <HeroTitle key={`intro-h1-${index}`}>{block.content}</HeroTitle>;
          }

          if (block.type === "paragraph") {
            return (
              <ParagraphGroup
                key={`intro-p-${index}`}
                lines={block.lines}
                emphasis
              />
            );
          }

          if (block.type === "hr") {
            return <Divider key={`intro-hr-${index}`} />;
          }

          if (block.type === "list") {
            return <BulletList key={`intro-list-${index}`} items={block.items} />;
          }

          return null;
        })}
      </div>
    </div>
  );
}

function SubSectionCard({ title, blocks }: SubSection) {
  return (
    <div className="space-y-3 rounded-[18px] border border-zinc-200 bg-zinc-50/60 p-4">
      {title ? <SubSectionHeading>{title}</SubSectionHeading> : null}
      <div className="space-y-3">
        {blocks.map((block, index) => {
          if (block.type === "paragraph") {
            return <ParagraphGroup key={`sub-p-${index}`} lines={block.lines} />;
          }

          if (block.type === "list") {
            return <BulletList key={`sub-list-${index}`} items={block.items} />;
          }

          if (block.type === "hr") {
            return <Divider key={`sub-hr-${index}`} />;
          }

          return null;
        })}
      </div>
    </div>
  );
}

function SectionCard({ title, blocks }: Section) {
  const groups = splitSubSections(blocks);

  return (
    <div className="space-y-4 rounded-[20px] border border-zinc-300 bg-white p-5">
      <SectionHeading>{title}</SectionHeading>
      <div className="space-y-3">
        {groups.map((group, index) => (
          <SubSectionCard
            key={`${title}-${group.title ?? "group"}-${index}`}
            title={group.title}
            blocks={group.blocks}
          />
        ))}
      </div>
    </div>
  );
}

export default function HumanReadableProfile() {
  const blocks = parseProfileText(profileText);
  const { intro, sections } = splitSections(blocks);

  return (
    <section className="w-full">





      <div className="space-y-4">
        <IntroCard blocks={intro} />
        {sections.map((section, index) => (
          <SectionCard
            key={`${section.title}-${index}`}
            title={section.title}
            blocks={section.blocks}
          />
        ))}
      </div>
    </section>
  );
}
