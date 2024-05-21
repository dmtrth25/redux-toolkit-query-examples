# Redux Toolkit Query (RTK Query) and createAsyncThunk

## createAsyncThunk adantages:

- can be used for any asynchronous operations
- manual handling of loading, error and success states
  (RTK Query handles everything for you)
  ready-made variables error isLoading
- we do all the checks ourselves

## RTK Query adantages:

- automatically generates actions, reducers, hooks, queries, mutations and data caching
- built-in tools for caching and updating data
  that is, we receive data from the server and write it to the cache (we optimize the site)
  the data will be taken from the cache and not a new request will be made
