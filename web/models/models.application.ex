defmodule RiotApi.Application do
  use RiotApi.Web, :model

  schema "applications" do
    field :name, :string

    timestamps()
  end
end
