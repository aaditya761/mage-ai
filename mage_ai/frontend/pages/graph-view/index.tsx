import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Dashboard from '@components/Dashboard';
import { ROW_LIMIT } from '@components/shared/Paginate';
import PrivateRoute from '@components/shared/PrivateRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import api from '@api';
import {
    PipelineScheduleReqQueryParamsType,
    SORT_QUERY_TO_COLUMN_NAME_MAPPING,
    SortQueryParamEnum,
} from '@interfaces/PipelineScheduleType';
import { queryFromUrl, queryString } from '@utils/url';
import GraphViewDashBoard from '@components/GraphViewDashBoard';

function GraphViewPage() {
    const q = queryFromUrl();
    const page = q?.page ? q.page : 0;
    const orderByQuery = q?.order_by || SortQueryParamEnum.CREATED_AT;

    const pipelineSchedulesRequestQuery: PipelineScheduleReqQueryParamsType = {
        _limit: ROW_LIMIT,
        _offset: page * ROW_LIMIT,
        order_by: orderByQuery,
    };

    const {
        data: dataPipelineSchedules,
        mutate: fetchPipelineSchedules,
    } = api.pipeline_schedules.list(
        pipelineSchedulesRequestQuery,
        {
            refreshInterval: 7500,
            revalidateOnFocus: true,
        },
    );

    const queryClient = new QueryClient();

    return (
      <Dashboard
            title="Triggers"
            uuid="triggers/index"
        >
        <QueryClientProvider client={queryClient}>
          <GraphViewDashBoard/>
        </QueryClientProvider>
      </Dashboard>
    );
} 

GraphViewPage.getInitialProps = async () => ({});

export default PrivateRoute(GraphViewPage);
