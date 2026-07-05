import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/selection/voyage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/selection/voyage"!</div>
}
