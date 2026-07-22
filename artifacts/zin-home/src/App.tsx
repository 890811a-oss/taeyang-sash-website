import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import BrandStory from '@/pages/BrandStory';
import Portfolio from '@/pages/Portfolio';
import Guide from '@/pages/Guide';
import Products from '@/pages/Products';
import Contact from '@/pages/Contact';
import Stores from '@/pages/Stores';
import Events from '@/pages/Events';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/brand" component={BrandStory} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/guide" component={Guide} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/stores" component={Stores} />
        <Route path="/events" component={Events} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
