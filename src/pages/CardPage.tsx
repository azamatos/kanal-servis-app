import { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchData } from "../components/CardData";
import Header from "../components/Header";
import { ICard } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";
import { useActions } from "../hooks/actions";

function FavouritesPage() {

  const [cards, setCards] = useState<ICard[] | null>()
  const [loading, setLoading] = useState<boolean>(false)
  const { authorize } = useActions()
  authorize(true)

  useEffect(() => {

    const getData = async () => {
      try {
        setLoading(true)
        setCards(await Promise.all(fetchData()))
      } catch (err) {
        console.log(err)
        setCards(null)
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
        <LoadingSpinner />
    )
  }

  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-20">
      <Header />
      <div className="grid gap-20 grid-cols-2 grid-rows-2 w-[1700px]">
        {cards?.map((item: ICard, index: number) => (
          <Card key={index} {...item} />
        ))
        }
      </div>
    </div>
  );
}

export default FavouritesPage;