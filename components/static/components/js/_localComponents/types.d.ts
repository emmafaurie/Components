/* eslint-disable camelcase */

/*type GroupProgressType = {
  dueDate: string;
  difficulty: string;
  numberStudent: number;
  progress: number;
  session: string;
  statut: string;
  subject: string;
  title: string;
};*/

import {
  DistributionState,
  PeerImpactLabels,
  PeerImpactLevels,
  QuestionDifficultyLabels,
  QuestionDifficultyLevels,
} from "./enum";

export type UserType = {
  avatar?: string;
  username: string;
};

export type AssignmentType = {
  answer_count: number;
  owner: string;
  pk: string;
  question_count: number;
  title: string;
};

export type GroupAssignmentType = {
  active: boolean;
  answerCount: number;
  author: string;
  difficulty: string;
  distributionState: DistributionState;
  dueDate: Date;
  groups: GroupType[];
  issueCount: number;
  pk: number;
  progress: number;
  questionCount: number;
  title: string;
};

type DisciplineType = { pk: number; title: string };

export type CollectionType = {
  answerCount: number;
  author: string;
  description: string;
  discipline?: DisciplineType;
  featured?: boolean;
  followed_by_user?: boolean;
  follow_url?: string;
  pk: number;
  title: string;
  url: string;
};

type QuestionDifficulty = {
  label: QuestionDifficultyLevels;
  score: number;
  value?: QuestionDifficultyLabels;
};

type QuestionPeerImpact = {
  label: PeerImpactLevels;
  score: number;
  value?: PeerImpactLabels;
};

type AnswerChoiceType = {
  correct: boolean;
  label: string;
  text: string;
};

export type QuestionType = {
  answer_count: number;
  answerchoice_set: AnswerChoiceType[];
  category?: { title: string }[];
  difficulty: QuestionDifficulty;
  discipline?: DisciplineType;
  image: string;
  image_alt_text: string;
  peer_impact: QuestionPeerImpact;
  pk: number;
  text: string;
  title: string;
  user: UserType;
  video_url: string;
};

export type GroupType = {
  title: string;
  author: string;
  session: string;
  studentCount: number;
  assignmentCount: number;
  active: boolean;
  subject?: string[];
  due_date: Date;
  progress: number;
  tags?: string[];
  url: string;
};

export type AssignmentBisProps = {
  assignment: AssignmentType;
  gettext: (a: string) => string;
};

export type GroupAssignmentProps = {
  gettext: (a: string) => string;
  assignment: GroupAssignmentType;
};

export type AssignmentStudentProps = {
  gettext: (a: string) => string;
  assignment: GroupAssignmentType;
};

export type AssignmentStudentCompletedProps = {
  activeAssignmentCount: number;
  activeGroupCount: number;
  createdQuestionCount: number;
  gettext: (a: string) => string;
};

export type CollectionProps = {
  gettext: (a: string) => string;
  getHeight: (height: number) => void;
  logo: string;
  minHeight: number;
  collection: CollectionType;
  toggleBookmarked: () => void;
};

export type GroupProps = {
  gettext: (a: string) => string;
  group: GroupType;
};

export type GroupStudentProps = {
  gettext: (a: string) => string;
  group: GroupType;
};

export type QuestionProps = {
  gettext: (a: string) => string;
  bookmarked?: boolean;
  difficultyLabels?: Record<string, string>;
  question: QuestionType;
  toggleBookmarked: () => void;
};
