defmodule RiotApi.ApplicationController do
  use RiotApi.Web, :controller

  def index(conn, _params) do
    applications = Repo.all(RiotApi.Application)
    json conn, applications
  end

  def show(conn, %{"id" => id}) do
    application = Repo.get(RiotApi.Application, String.to_integer(id))

    json conn, application
  end
end
