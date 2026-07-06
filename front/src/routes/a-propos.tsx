import {createFileRoute} from '@tanstack/react-router'
import Layout from "../../components/Layout.tsx";
import ContentWidth from "../../components/ContentWidth.tsx";
import voyage from '@assets/voyage.jpg'
import event from '@assets/event.jpg'

export const Route = createFileRoute('/a-propos')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Layout
      highlightedBackgroundSrc={voyage}
      selectedMenu="ABOUT"
    >
      <ContentWidth>
        <div className="h-full flex items-center justify-center gap-12">
          <p className="text-white font-['Jomhuria'] h-fit text-3xl w-[70%] leading-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus nec nulla porta tincidunt. Cras
            fringilla eleifend massa ut congue. Quisque non justo dignissim, fermentum sem accumsan, vulputate mauris. Ut
            eu magna id nunc iaculis tincidunt in eget massa. Integer eu semper nisi. Curabitur suscipit tristique lorem.
            Duis ac odio sagittis, aliquam sapien vitae, eleifend elit. Fusce at ante vel ante faucibus dictum non euismod
            dolor. Fusce non commodo sapien, eu pretium ex. Ut viverra est nec neque pharetra tincidunt. Etiam pulvinar
            posuere lectus, ac fringilla est vulputate sit amet. Maecenas posuere nulla blandit eleifend tristique.
            <br/><br/>
            <span className="text-4xl">Arthur H.</span>
          </p>
          <img
            src={event}
            alt="about me"
            className="w-auto h-96 shadow-[0_4px_30px_-5px_rgba(0,0,0,1)]"
          />
        </div>
      </ContentWidth>
    </Layout>
  )
}
