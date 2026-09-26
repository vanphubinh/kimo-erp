import type * as Solid from 'solid-js';

import { HeadContent, Scripts, createRootRoute } from '@tanstack/solid-router';
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools';
import { HydrationScript } from 'solid-js/web';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Kimo ERP',
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument(props: Readonly<{ children: Solid.JSX.Element }>) {
  return (
    <html lang="vi">
      <head>
        <HydrationScript />
      </head>
      <body>
        <HeadContent />
        {props.children}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
