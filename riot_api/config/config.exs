# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :riot_api,
  ecto_repos: [RiotApi.Repo]

# Configures the endpoint
config :riot_api, RiotApi.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "z2tE+LbkHqkzr4Oj3siEtp4ilgLElQ8/qw7AUklol0njoALwiCReTVZxNz7/ie1j",
  render_errors: [view: RiotApi.ErrorView, accepts: ~w(html json)],
  pubsub: [name: RiotApi.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
