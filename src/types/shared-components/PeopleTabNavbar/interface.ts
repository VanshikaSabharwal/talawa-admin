import type { ReactNode } from 'react';

/**
 * Props for PeopleTabNavbar component.
 */
export interface InterfacePeopleTabNavbarProps {
  title?: string;
  search?: {
    placeholder: string;
    onSearch: (value: string) => void;
    inputTestId?: string;
    buttonTestId?: string;
  };
  sorting?: Array<{
    title: string;
    options: { label: string; value: string | number }[];
    selected: string | number;
    onChange: (value: string | number) => void;
    testIdPrefix: string;
    icon?: string | null;
  }>;
    participationFilter?: {
    selected: 'ALL' | 'REGISTERED' | 'ADMIN_CREATOR';
    onChange: (value: 'ALL' | 'REGISTERED' | 'ADMIN_CREATOR') => void;
  };

  showEventTypeFilter?: boolean;
  actions?: ReactNode;
}
