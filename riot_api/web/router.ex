defmodule RiotApi.Router do
  use RiotApi.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1", RiotApi do
    pipe_through :api

    get "/applications", ApplicationController, :index
    get "/applications/:id", ApplicationController, :show
  end
end
